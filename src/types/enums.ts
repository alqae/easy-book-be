export enum UserRole {
  CUSTOMER = 'customer',
  BUSINESS = 'business',
  EMPLOYEE = 'employee',
  ADMIN = 'admin'
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BANNED = 'banned',
  DELETED = 'deleted',
  UNVERIFIED = 'unverified'
}

export enum TokenStatus {
  ACTIVE = 'active',
  EXPIRED = 'expired',
}

export enum TokenType {
  INVITATION = 'invitation',
  FORGOT_PASSWORD = 'forgot_password',
  VERIFY_EMAIL = 'verify_email',
}

export enum EmailTemplate {
  FORGOT_PASSWORD = 'forgot-password',
  VERIFICATION = 'verify-email',
}

export enum AttachmentGroup {
  AVATARS = 'avatars',
  COMMENTS = 'comments'
}
