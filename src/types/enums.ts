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

/**
 * Reservation Statuses:
 *
 * - Pending: The reservation has been created but has not yet been confirmed or processed.
 * - Confirmed: The reservation has been confirmed by the user or the system.
 * - In Process: The reservation is being processed, for example, waiting for resource allocation or availability verification.
 * - Completed: The reservation has been completed and executed.
 * - Canceled: The reservation has been canceled by the user or the system.
 * - No Show: The user did not show up for the reservation at the scheduled date and time.
 * - Rescheduled: The reservation has been rescheduled to a different date and time.
 */
export enum ReservationStatus {
  PENDING = 'Pending',
  CONFIRMED = 'Confirmed',
  IN_PROCESS = 'In Process',
  COMPLETED = 'Completed',
  CANCELED = 'Canceled',
  NO_SHOW = 'No Show',
  RESCHEDULED = 'Rescheduled'
}
