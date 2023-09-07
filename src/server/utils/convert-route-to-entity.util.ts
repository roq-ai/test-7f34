const mapping: Record<string, string> = {
  blogs: 'blog',
  organizations: 'organization',
  products: 'product',
  reviews: 'review',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
