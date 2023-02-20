function displayDateTime() {
        var today = new Date();
        var date = today.toLocaleDateString();
        var time = today.toLocaleTimeString();
        var dateTimeString = date + ' ' + time;
        document.getElementById("date-time").innerHTML = dateTimeString;
      }
      setInterval(displayDateTime, 1000); // Refresh setiap 1 detik