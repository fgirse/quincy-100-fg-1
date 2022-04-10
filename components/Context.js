/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier



exports = function () {
  const activeUser = context.user
  const adminUserId = context.values.get('adminUserId')
  if (activeUser.id == adminUserId) {
    // The user can only execute code here if they're an admin.
  } else {
    throw Error('This user is not allowed to execute the system function')
  }
}
