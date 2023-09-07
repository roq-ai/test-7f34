interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Content Creator'],
  tenantName: 'Organization',
  applicationName: 'Test',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View and purchase products',
    'Leave reviews and testimonials',
    'View informative videos and read blog posts',
    'Appreciate witty plant puns in the app',
  ],
  ownerAbilities: [
    'Manage product catalogue',
    'Manage user reviews and testimonials',
    'Invite team members and content creators',
    'Manage user experience gamification',
  ],
};
