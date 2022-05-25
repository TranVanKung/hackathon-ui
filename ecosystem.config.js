module.exports = {
  apps: [
    {
      name: "web",
      script: "npm",
      args: "run start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",

      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
