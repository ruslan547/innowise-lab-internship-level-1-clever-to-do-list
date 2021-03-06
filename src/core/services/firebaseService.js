import { auth, database } from '../../firebase';

export function register(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signout() {
  return auth.signOut();
}

export function writeUserData({ uid }, tasks) {
  database.ref(`users/${uid}`).set({ tasks });
}

export function pushUserData({ uid }, task) {
  database.ref(`users/${uid}`).child('tasks').push(task);
}

export async function updateUserData({ uid }, task) {
  database.ref(`users/${uid}`).child('tasks').update(task);
}

export function onUserData(user) {
  return new Promise((resolve) => {
    database
      .ref(`users/${user.uid}`)
      .child('tasks')
      .on('value', async (snapshot) => {
        const response = snapshot.val();
        if (response instanceof Object) {
          resolve(response);
        }
      });
  });
}

export function offUserDate({ uid }) {
  database.ref(`users/${uid}`).off('value');
}
