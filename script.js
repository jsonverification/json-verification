document.addEventListener('DOMContentLoaded', function() {
    var validateBtn = document.getElementById('validate-btn');
    var jsonInput = document.getElementById('json-input');
    var messageParagraph = document.getElementById('message');

    validateBtn.addEventListener('click', function() {
        try {
            // Try to parse JSON
            var json = JSON.parse(jsonInput.value);
            messageParagraph.textContent = "Valid JSON";
            messageParagraph.style.color = "green";
            
            // Format the JSON and set it to the textarea
            jsonInput.value = JSON.stringify(json, null, 4);
        } catch (e) {
            // If error, show message
            messageParagraph.textContent = "Invalid JSON: " + e.message;
            messageParagraph.style.color = "red";
        }
    });
});

	document.addEventListener('DOMContentLoaded', function () {
    var jsonInput = document.getElementById('json-input');
    var messageParagraph = document.getElementById('message');
    var validateBtn = document.getElementById('validate-btn');
    var clearBtn = document.getElementById('clear-btn');
    var downloadBtn = document.getElementById('download-btn');

    var updateLineAndCharCount = function () {
        var lineCount = jsonInput.value.split("\n").length;
        var charCount = jsonInput.value.length;
        // If there's a need to display character count, you can include charCount in your message too
        messageParagraph.textContent = "Lines: " + lineCount;
    };
    
    // Whenever the content of the textarea changes
    jsonInput.addEventListener('input', updateLineAndCharCount);

    // Validate JSON
    validateBtn.addEventListener('click', function () {
        var json;
        try {
            json = JSON.parse(jsonInput.value);
            // Reformatting JSON
            jsonInput.value = JSON.stringify(json, null, 4);
            updateLineAndCharCount(); // Update line count after reformatting
            messageParagraph.style.color = "green";
            messageParagraph.textContent = "Valid JSON";
        } catch (e) {
            messageParagraph.style.color = "red";
            messageParagraph.textContent = "Invalid JSON: " + e.message;
        }
    });

    // Clear JSON
    clearBtn.addEventListener('click', function () {
        jsonInput.value = '';
        messageParagraph.textContent = '';
    });

    // Download JSON
    downloadBtn.addEventListener('click', function () {
        var json = jsonInput.value;
        if (json) {
            var blob = new Blob([json], { type: 'application/json' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'data.json';
            document.body.appendChild(a); // we need to append it to the body for Firefox
            a.click();
            document.body.removeChild(a); // then remove it from the body
            URL.revokeObjectURL(url);
       
        }
    });
});

