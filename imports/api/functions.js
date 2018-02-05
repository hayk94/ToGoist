export const getUserEmail = user => user.services && user.services.google && user.services.google.email || user.emails && user.emails[0] && user.emails[0].address || null

export const getUserFirstName = user => user.services && user.services.google && user.services.google.given_name || user.emails && user.profile && user.profile.name || null

export const getUserLastName = user => user.services && user.services.google && user.services.google.family_name || user.emails && user.profile && user.profile.lastName || null
