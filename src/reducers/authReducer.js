const auth = {
  isSignedIn: null
};
export default function(state = auth, action) {
  switch (action.type) {
    case 'AUTH_SIGNED_IN':
      return { isSignedIn: true };
    case 'AUTH_SIGNED_OUT':
      return { isSignedIn: false };
    default:
      return state;
  }
}
