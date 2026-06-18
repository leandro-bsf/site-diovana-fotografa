// Server-only config. 
// O import de 'node:process' foi removido pois 'process' é um global 
// disponível no ambiente Node.js após a instalação de @types/node.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    // Add server-only values here, e.g.:
    //   databaseUrl: process.env.DATABASE_URL,
    //   stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  };
}