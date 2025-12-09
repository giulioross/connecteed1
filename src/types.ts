export interface ToolItem {
  id: string;
  title: string;
  filename: string;
  placeholderUrl: string;
}
export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  agreedToTerms: boolean;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
