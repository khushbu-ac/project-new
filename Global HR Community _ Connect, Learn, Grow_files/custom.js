/* This is your custom Javascript */

jQuery(document).ready(function ($) {
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();

        $.ajax({
            url: customData.restUrl,
            method: 'POST',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-WP-Nonce', customData.nonce);
            },
            contentType: 'application/json',
            data: JSON.stringify({ firstname: firstname, lastname: lastname, email: email }),
            success: function (response) {
                if (response && response.login_url) {
                    window.location.href = response.login_url;
                } else {
                    console.error('Login URL not received', response);
                }
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });
    });
});

