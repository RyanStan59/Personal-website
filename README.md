# Personal Website

## Firebase (Contact Form → Firestore)

This site includes a contact form that writes submissions to **Firebase Firestore**.

### Setup

- Create a Firebase project in the Firebase console
- Create a Firestore database (Production or Test mode)
- In Project settings → Your apps → Web app, copy the config values

Create a local `.env` file (do **not** commit it) based on `.env.example`:

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`

Then:

```bash
npm install
npm start
```

### Firestore collection

The form writes documents to:

- `contactSubmissions`

Each submission includes:

- `name`, `email`, `message`, `createdAt`, `pagePath`, `userAgent`

### Minimal security rules (recommended)

In Firebase Console → Firestore → Rules, you can use rules like:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactSubmissions/{doc} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

