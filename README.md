# Vocal Taks Manager

Cette application est une app de création de taches avec option de recording
vocal. Enregistrer vocalement un tache perment de faciliter la 
création de tâches et de le faire "on the go!" lorsqu'on ne peut pas écrire.

Pour l'enregistrement vocal:
https://www.npmjs.com/package/react-audio-voice-recorder
ou
https://getstream.io/chat/docs/sdk/react/components/message-input-components/audio_recorder/

Pour la traduction audio->text :
on utilise l'api speach-to-text d'openAi
https://platform.openai.com/docs/guides/speech-to-text?lang=javascript


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
