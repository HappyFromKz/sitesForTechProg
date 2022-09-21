$(function(){
    $('#bdinfo').on('click', function (){
        var date = $('#date').val();
        $.ajax({
            method: "POST",
            url: "analizepsp.php",
            datyType:'html',
            data: {'date': date},
            beforeSend: (function(){
                $("#updatebutton").prop("disabled", true);
            }),
            success: (function(data) {
                var arr = data.split('|');
                new Chart(document.getElementById("bar-chart1"), {
                    type: 'line',
                    data: {
                        labels: ["9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00",],
                        datasets: [
                            {
                                label: "Кол.во людей",
                                data: [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]],
                                borderColor: 'orange',
                                backgroundColor: 'white',
                                pointBorderColor: 'orange',
                                pointBackgroundColor: 'rgba(255,150,0,0.5)'

                            }
                        ]
                    },
                    options: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: 'Кол.во людей в отрезке часов'
                        }
                    }
                });
                new Chart(document.getElementById("bar-chart2"), {
                    type: 'line',
                    data: {
                        labels: ["bakalavr1", "bakalavr2", "bakalavr3", "bakalavr4", "bakalavr5", "bakalavr6", "bakalavr7","bakalavr8", "bakalavr9", "bakalavr10", "bakalavr11", "bakalavr12", "magphd13", "magphd14", "colluge15"],
                        datasets: [
                            {
                                label: "Кол.во людей",
                                data: [arr[8],arr[9],arr[9],arr[10],arr[11],arr[12],arr[13],arr[14],arr[15],arr[16],arr[17],arr[18],arr[19],arr[20],arr[21],arr[22]],
                                borderColor: 'orange',
                                backgroundColor: 'white',
                                pointBorderColor: 'orange',
                                pointBackgroundColor: 'rgba(255,150,0,0.5)'

                            }
                        ]
                    },
                    options: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: 'Кол.во людей в отрезке часов'
                        }
                    }
                });
                $("#updatebutton").prop("disabled", false);
            })
        })
    })
})