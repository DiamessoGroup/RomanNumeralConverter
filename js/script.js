function convertToRoman(num) {
    var cardinal;
    var array = [];
    var converter = [];
    var converted = [];
    var rejoin = [];
    var roman = [
        {
            "key": 1,
            "romano": 'I'
        },
        {
            "key": 2,
            "romano": 'II'
        },
        {
            "key": 3,
            "romano": 'III'
        },
        {
            "key": 4,
            "romano": 'IV'
        },
        {
            "key": 5,
            "romano": 'V'
        },
        {
            "key": 6,
            "romano": 'VI'
        },
        {
            "key": 7,
            "romano": 'VII'
        },
        {
            "key": 8,
            "romano": 'VIII'
        },
        {
            "key": 9,
            "romano": 'IX'
        },
        {
            "key": 10,
            "romano": 'X'
        },
        {
            "key": 20,
            "romano": 'XX'
        },
        {
            "key": 30,
            "romano": 'XXX'
        },
        {
            "key": 40,
            "romano": 'XL'
        },
        {
            "key": 50,
            "romano": 'L'
        },
        {
            "key": 60,
            "romano": 'LX'
        },
        {
            "key": 70,
            "romano": 'LXX'
        },
        {
            "key": 80,
            "romano": 'LXXX'
        },
        {
            "key": 90,
            "romano": 'XC'
        },
        {
            "key": 100,
            "romano": 'C'
        },
        {
            "key": 200,
            "romano": 'CC'
        },
        {
            "key": 300,
            "romano": 'CCC'
        },
        {
            "key": 400,
            "romano": 'CD'
        },
        {
            "key": 500,
            "romano": 'D'
        },
        {
            "key": 600,
            "romano": 'DC'
        },
        {
            "key": 700,
            "romano": 'DCC'
        },
        {
            "key": 800,
            "romano": 'DCCC'
        },
        {
            "key": 900,
            "romano": 'CM'
        },
        {
            "key": 1000,
            "romano": 'M'
        },
        {
            "key": 2000,
            "romano": 'MM'
        },
        {
            "key": 3000,
            "romano": 'MMM'
        },
        {
            "key": 4000,
            "romano": 'MV'
        },
        {
            "key": 5000,
            "romano": 'V'
        }
    ];

    function cardinals(num) {
        for (var i = 0; i < roman.length; i++) {
            if ((num > roman[i].key && num < roman[i + 1].key) || (num == roman[i].key)) {
                cardinal = roman[i].key;
                converter = roman[i].romano;
                converted.push(converter);
            }
        }

    }



    for ( i = 0; i < roman.length; i++ ) {
        if ((num > roman[i].key && num < roman[i + 1].key) || (num === roman[i].key)) {
            cardinal = roman[i].key;
            converter = roman[i].romano;
            converted.push(converter);

            do {
                array = num.toString().split('');
                array.splice(0, 1);
                rejoin = array.join('');
                num = Number(rejoin);
                cardinals(num);
            } while (num !== 0);
        }
    }
    converted = converted.join('');
    return converted;
}

$('#convertButton').on('click', function () {
    var regEx = /^[a-zA-Z]+$/;
    var regEx1 = /^[1-9]+$/;
    var inputRomanVal = $('#inputRoman').val();
    if (inputRomanVal == "" || inputRomanVal == NaN || inputRomanVal == inputRomanVal.match(regEx)) {
        $('#romanPlace').html("Please enter an valid number between 1 and 5000.<br><br>"+inputRomanVal+" is not a valid entry");
        $('#inputRoman').val('');
    } else if (inputRomanVal == inputRomanVal.match(regEx1)) {
        convertToRoman(inputRomanVal);
        $('#romanPlace').html(inputRomanVal+' converts to '+convertToRoman(inputRomanVal));
        $('#inputRoman').val('');
    } else {
        $('#romanPlace').html("Please enter an valid number between 1 and 5000.<br><br>"+inputRomanVal+" is not a valid entry");
        $('#inputRoman').val('');
    }
});