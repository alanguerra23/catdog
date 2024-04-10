// Arquivo de configuração para o Lint Staged
module.exports = {
  // Formatar os arquivos do frontend
  'frontend/**/*.ts': [
    'npx lerna run lint --scope @catdog/frontend --stream',
    'npx lerna run format --scope @catdog/frontend --stream',
  ],
  // Formatar os arquivos do backend
  'backend/**/*.ts': [
    'npx lerna run lint --scope @catdog/backend --stream',
    'npx lerna run format --scope @catdog/backend --stream',
  ],
};
