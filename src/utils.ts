import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import handlebars from 'handlebars';
import { Response } from 'express';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';

import { EmailTemplate } from './types/enums';
import { UserPayload } from './models/User';
import { transporter } from './mailer';

const JWT_SECRET = process.env.JWT_SECRET || 'my_secret_key';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'my_refresh_token_secret';

/**
 * Sends a JSON response with a given status and data.
 * 
 * @param res - The Express Response object.
 * @param message - The message to be included in the response.
 * @param data - The data to be included in the response.
 * @param status - The HTTP status code to be used for the response. Defaults to 200.
 */
export const sendResponse = <T>(res: Response, message: string, data: T, status = 200) => {
  return res.status(status).json({ message, data })
}

/**
 * Generates a JWT token.
 * 
 * @param payload - The content of the token's payload. Can be any object you want to include in the token.
 * @param expiresIn - Expiration time of the token in string format (e.g., "1h", "2d").
 * @returns The generated JWT token.
 * 
 * @example
 * const token = generateToken({ id: 1, email: 'bob@bob.com' }, '1h');
 */
export function generateToken(
  payload: UserPayload,
  type: 'access' | 'refresh' | 'verify' | 'reset' = 'access',
  expiresIn = '1h'
): string {
  const secret = type === 'access' ? JWT_SECRET : REFRESH_TOKEN_SECRET;
  if (type === 'refresh') expiresIn = '30d';
  return jwt.sign(payload, secret, { expiresIn });
}

/**
 * Retrieves the payload from a JWT token.
 * 
 * @param token - The JWT token from which to retrieve the payload.
 * @returns The decoded payload of the token if valid, otherwise `null`.
 * 
 * @example
 * const payload = decodeToken('your_jwt_token');
 */
export const decodeToken = (
  token: string,
  type: 'access' | 'refresh' | 'verify' | 'reset' = 'access'
): UserPayload | null => {
  try {
    const decoded = jwt.verify(token, type == 'access' ? JWT_SECRET : REFRESH_TOKEN_SECRET);
    return decoded as UserPayload;
  } catch (error) {
    return null;
  }
}

/**
 * Validates a JWT token and checks if it is expired.
 * 
 * @param token - The JWT token to be validated.
 * @returns An object containing the validation status and, if valid, the decoded payload.
 * 
 * @example
 * const result = verifyToken('your_jwt_token');
 * if (result.valid) {
 *   console.log('Token is valid:', result.payload);
 * } else {
 *   console.log('Token is invalid or expired:', result.error);
 * }
 */
export const verifyToken = (
  token: string,
  type: 'access' | 'refresh' | 'verify' | 'reset' = 'access'
): boolean => {
  try {
    // Verify the token using the secret
    jwt.verify(token, type == 'access' ? JWT_SECRET : REFRESH_TOKEN_SECRET);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Compiles a Handlebars template with the given context.
 * 
 * @param templateName - Name of the template to compile.
 * @param context - Object containing the context to be passed to the template.
 * @returns The compiled template as a string.
 * 
 * @example
 * const context = { name: 'John Doe' };
 * const html = compileTemplate('welcome', context);
 * console.log(html); // '<p>Hello, John Doe!</p>'
 */
export const compileTemplate = (templateName: EmailTemplate, context: any): string => {
  const templatePath = path.resolve('./src/templates', `${templateName}.hbs`);
  const templateSource = fs.readFileSync(templatePath, 'utf-8');
  const template = handlebars.compile(templateSource);
  return template(context);
}

/**
 * Sends an email using the nodemailer transporter.
 * 
 * @param to - The email address of the recipient.
 * @param subject - The subject of the email.
 * @param templateName - The name of the email template to use.
 * @param context - An object containing the data to be used in the email template.
 * @returns A Promise resolving to an object containing the sent message information.
 * 
 * @example
 * const sent = await sendEmail('user@example.com', 'Hello', 'hello-email', { name: 'John Doe' });
 * console.log('Email sent:', sent);
 */
export const sendEmail = async (
  to: string,
  subject: string,
  templateName: EmailTemplate,
  context: any
): Promise<SMTPTransport.SentMessageInfo> => {
  const html = compileTemplate(templateName, context);

  return await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html,
  });
}
