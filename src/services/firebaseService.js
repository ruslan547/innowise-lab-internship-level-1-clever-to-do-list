import { auth, database } from '../firebase';

export function register(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signout() {
  return auth.signOut();
}

export function readUserData(user, setTasks) {
  if (!user) {
    return;
  }
  database.ref(`users/${user.uid}`).once('value', (snapshot) => {
    const response = snapshot.val();
    if (response instanceof Object) {
      if (response.tasks) {
        const parsedData = JSON.parse(response.tasks, (key, value) => {
          if (key === 'date') return new Date(value);
          return value;
        });
        setTasks(parsedData);
      }
    }
  });
}

export function writeUserData({ uid }, tasks) {
  const jsonStr = JSON.stringify(tasks);
  database.ref(`users/${uid}`).set({ tasks: jsonStr });
}

export function unsubscribe(callback) {
  return auth.onAuthStateChanged(callback);
}
