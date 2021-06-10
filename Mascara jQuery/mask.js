<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script>

jQuery(document).ready(function($) {
    if (document.querySelector("#phone")) {
        let maskBehavior = function (val) {
            return val.replce(/\D/g, '').length === 11 ? "(00) 00000-0000" : "(00) 0000-00009";
        },
        options = {onKeyPress: function(val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options);
            }
        };

        $("#phone").mask(maskBehavior, options);
    }

    if (document.querySelector("#email")) {
        $("#email").mask("A", {
            translation: {
                A: {pattern: /[\w@\-.+]/, recursive: true},
            },
        });
    }
});