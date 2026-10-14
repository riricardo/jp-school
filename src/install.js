export function setupInstall(button, status, browser = window) {
  let prompt = null;
  const standalone = browser.matchMedia('(display-mode: standalone)');
  const update = () => {
    button.hidden = standalone.matches || browser.navigator.standalone === true;
  };
  browser.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    prompt = event;
    update();
    status.textContent = '';
  });
  browser.addEventListener('appinstalled', () => {
    prompt = null;
    button.hidden = true;
    status.textContent = 'ManJapa instalado.';
  });
  standalone.addEventListener('change', update);
  button.onclick = async () => {
    if (!browser.isSecureContext) {
      status.textContent = 'Abra o aplicativo pelo endereço HTTPS para instalar.';
      return;
    }
    if (!prompt) {
      const ios = /iPad|iPhone|iPod/.test(browser.navigator.userAgent);
      status.textContent = ios
        ? 'No Safari, toque em Compartilhar e Adicionar à Tela de Início.'
        : 'No menu do navegador, procure Instalar aplicativo ou Adicionar à tela inicial. Se não aparecer, abra este endereço no Chrome e aguarde o carregamento.';
      return;
    }
    const request = prompt;
    prompt = null;
    button.disabled = true;
    try {
      await request.prompt();
      const choice = await request.userChoice;
      status.textContent = choice.outcome === 'accepted'
        ? 'Instalação solicitada.' : 'Instalação cancelada.';
    } catch {
      status.textContent = 'Não foi possível abrir a instalação. Tente pelo menu do navegador.';
    } finally {
      button.disabled = false;
    }
  };
  update();
}
