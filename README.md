# Scriber Site

Public landing page for `scriber.aetherpro.us`.

## Purpose

This repo is intentionally separate from the Scriber desktop app repo.

- Desktop app repo: `realtime`
- Public marketing/download site repo: `scriber-site`

That keeps product marketing, Stripe links, and web deployment separate from the Tauri application source.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Environment

Copy `.env.example` to `.env` if you want to override the default live links.

Current expected vars:

- `VITE_SCRIBER_FOUNDER_PAYMENT_LINK`
- `VITE_SCRIBER_PRO_PAYMENT_LINK`
- `VITE_SCRIBER_STUDIO_PAYMENT_LINK`
- `VITE_SCRIBER_DOWNLOAD_LINK`
- `VITE_SCRIBER_CONTACT_EMAIL`

## Deploy Shape

The build output is static and can be served by nginx or any static host.

Primary site target:

- `scriber.aetherpro.us`

Public download target is intended to be served directly from the site VM, for example:

- `https://scriber.aetherpro.us/downloads/Scriber_1.1.6_amd64.deb`

## VM Handoff

See [DEPLOY_VM_HANDOFF.md](./DEPLOY_VM_HANDOFF.md) for the VM-oriented deployment shape and nginx handoff notes.

## Notes

- Public installer download with in-app upgrade path
- No Stripe webhook logic in this repo
- No Google Analytics or ad pixels
- Linux-first messaging
