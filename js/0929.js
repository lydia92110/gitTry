// js原生語法
        document.getElementById("demo").innerHTML = "Hello World";
        document.getElementById("demo2").innerHTML = "Hello World";
        
        // jquery語法.--class,#--id
        $("#demo").html("Hello Wwwworld");
       
        for ( i = 0; i < 10; i++) {
            console.log(i + ": Hello!");
        }

        for ( i = 1; i < 10; i++) {
            for ( j = 1; j < 10; j++) {
                console.log(i * j );
            }
        }


        for ( i = 0; i < 5; i++) {
            $("#demo").append('<p class="myfont02">這是一個段落</p>');
        }

        for ( i = 0; i < 5; i++) {
            $("#demo3").append('<img src="image/cat1.avif" alt="圖片" width="200">');
        }

        // 陣列Array
        const myArray = ["apple", "banana", "cherry" ,"orange", "grape" ,"watermelon", "kiwi", "mango", "pineapple", "strawberry"];
        for (let i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);
        }
        console.log(myArray[0]); // 輸出 "apple"
        
        // 再度讀取陣列
        myArray.forEach(function(item) {
            console.log(item);
        });

        // 使用forEach方法遍歷陣列
        myArray.forEach(function(item, index) {
            $("#demo4").append('<p class="myfont03">' + index + ": " + item + '</p>');
        });

         // JSON格式 array[object,object] 物件

         const myJsonArray = [
            { name: "John", age: 30 ,city: "New York",job: "Engineer",gender: "Male"},
            { name: "Jane", age: 25 ,city: "Los Angeles",job: "Designer",gender: "Female"},
            { name: "Bob", age: 40 ,city: "Chicago",job: "Teacher",gender: "Male"}
        ];
        console.log(myJsonArray[0].name); // 輸出 "John"
        console.log(myJsonArray[1].city); // 輸出 "Los Angeles"
        console.log(myJsonArray[2].job); // 輸出 "Teacher"
    
        myJsonArray.forEach(function(item, index) {
            $("#demo5").append('<p class="myfont03">' +"編號 " + index + ": " + item.name + ", " + item.age + ", " + item.city + ", " + item.job + ", " + item.gender + '</p>');
        });

        myJsonArray.forEach(function(item, index) {
            console.log("編號 " + index + ": " + item.name + ", " + item.age + ", " + item.city + ", " + item.job + ", " + item.gender);
        });