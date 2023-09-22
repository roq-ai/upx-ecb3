interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage job applications',
    'Create and manage freelancer profile',
    'View job details',
    'View company details',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage jobs', 'Manage applications'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7a852eae-87a1-42dd-a1a3-4061485f606e',
};
