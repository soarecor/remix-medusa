import { ReactNode } from "react";

export const IframeDocument = (props) => (
  <iframe
    style={{}}
    srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with bot',
                  'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                  'botName': 'Audrey',
                  'botId': '4826e83d-3962-4689-b894-4755df8edb8f',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': '4826e83d-3962-4689-b894-4755df8edb8f',
                  'enableConversationDeletion': true,
                  'showPoweredBy': true,
                  'avatarUrl': 'https://dl.openseauserdata.com/cache/originImage/files/16c89aba97c9604fb5a1125d061e0f8f.png',
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': true,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
                  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/3fcd3e4e-d5bc-4bf5-8699-14b621b3ada2/v31782/style.css'
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
    width="100%"
    height="700px"
  ></iframe>
);
