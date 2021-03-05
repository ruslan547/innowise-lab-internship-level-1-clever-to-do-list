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

export async function readUserData(user, setTasks) {
  if (!user) {
    return;
  }
  database.ref(`users/${user.uid}`).on('value', (snapshot) => {
    const response = snapshot.val();
    if (response instanceof Object) {
      if (response.tasks) {
        Object.values(response.tasks).forEach((item) => {
          item.date = new Date(item.date);
        });
        setTasks(response.tasks);
      }
    }
  });
}

export function writeUserData({ uid }, tasks) {
  Object.values(tasks).forEach((item) => {
    item.date = +item.date;
  });
  database.ref(`users/${uid}`).set({ tasks });
}

export function pushUserData({ uid }, task) {
  task.date = +task.date;
  database.ref(`users/${uid}`).child('tasks').push(task);
}

export function updateUserData({ uid }, task) {
  const [key] = Object.keys(task);
  task[key].date = +task[key].date;
  database.ref(`users/${uid}`).child('tasks').update(task);
}

export function unsubscribe(callback) {
  return auth.onAuthStateChanged(callback);
}
