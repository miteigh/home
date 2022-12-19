const form = document.querySelector('form');
    const ssidInput = document.getElementById('ssid');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {event.preventDefault();

      // Get the WiFi network details from the form
      const ssid = ssidInput.value;
      const password = passwordInput.value;

      // Create the WiFi QR code data string
      const wifiData = `WIFI:S:${ssid};T:WPA;P:${password};;`;

      // Generate the QR code image
      QRCode.toDataURL(wifiData, (err, url) => {
        if (err) {
          console.error(err);
        } else {
            const img = document.querySelector('img');
            if (img) {
            img.parentNode.removeChild(img);
        }    
          // Display the QR code image on the page
          const newimg = document.createElement('img');
          newimg.src = url;
          document.body.appendChild(newimg);
        }
      });
    });
