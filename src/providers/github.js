export default function GitHub(options) {
  return {
    id: "github",
    name: "GitHub",
    type: "oauth",
    version: "2.0",
    scope: "read:user user:email",
    accessTokenUrl: "https://github.com/login/oauth/access_token",
    authorizationUrl: "https://github.com/login/oauth/authorize",
    profileUrl: "https://api.github.com/user",
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name || profile.login,
        email: profile.email,
        image: profile.avatar_url,
      }
    },
    ...options,
  }
}
