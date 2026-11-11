# Aanya's Unicorn Birthday Invitation

One-page 3D invitation: scroll to ride a unicorn through rainbow gates (Three.js from a CDN), with a countdown and an RSVP form. No build step: just `index.html`.

## 1. Edit your details
Open `index.html` and change the `CONFIG` block (name, age, date, venue, host, RSVP deadline).

## 2. Put the code on GitHub
```bash
cd aanya-birthday-invite
git init
git add .
git commit -m "Unicorn birthday invitation"
git branch -M main
git remote add origin https://github.com/<your-username>/aanya-birthday-invite.git
git push -u origin main
```
Create the empty repo on github.com first (New repository).

## 3. Turn on the website (GitHub Pages)
Repo > Settings > Pages > Deploy from a branch > `main` / root > Save.
Your link will be `https://<your-username>.github.io/aanya-birthday-invite/`.

## 4. Collect RSVPs in a Google Sheet (free)
1. Create a new Google Sheet.
2. Extensions > Apps Script. Paste in `rsvp-apps-script.gs`.
3. Deploy > New deployment > type **Web app**. Execute as **Me**, access **Anyone**. Deploy.
4. Copy the web app URL into `rsvpUrl` in `CONFIG`, then commit and push.

Until `rsvpUrl` is filled in, the form runs in preview mode and does not send replies anywhere.
