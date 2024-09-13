export enum UserRole {
  CUSTOMER,
  BUSINESS,
  EMPLOYEE,
  ADMIN
}

export enum UserStatus {
  ACTIVE,
  INACTIVE,
  BANNED,
  DELETED,
  UNVERIFIED
}

export enum TokenStatus {
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
}

export enum TokenType {
  INVITATION = 'INVITATION',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  VERIFY_EMAIL = 'VERIFY_EMAIL',
}

export enum EmailTemplate {
  FORGOT_PASSWORD = 'forgot-password',
  VERIFICATION = 'verify-email',
}
