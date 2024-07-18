<script src="https://cdn.jsdelivr.net/npm/comfy.js@latest/dist/comfy.min.js"></script>

 <script type="text/javascript">
        ComfyJS.onChat = (user, message, flags, self, extra) => {
            var newMessage = document.createElement("li");

            if (message.mod) {
                newMessage.classList.add('mod');
            }

            if (message.subscriber) {
                newMessage.classList.add('sub');
            }

            var text = document.createElement("blockquote");

            newMessage.innerText = user;
            text.innerText = message;

            newMessage.append(text);
            chat.append(newMessage);
        }

        ComfyJS.Init( "callmeCog" );
