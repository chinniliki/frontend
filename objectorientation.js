
<script>
    class Student{
        constructor(s_name, s_age, s_email){
            this.name = s_name
            this.age = s_age
            this.email = s_email
        }
        eat(){
            console.log(this.name,'is eating');
        }
        learn(){
            console.log(this.name,'is learning');
        }
    }
    s1 = new Student('Akash',25,'Ak@kod.com');//Creation of an object of Student class
    console.log(s1.name, s1.age, s1.email); //Accessing Instance Variables
    s1.eat(); //Invoking Instance Method

    s2 = new Student('Ankit',26,'An@kod.com');//Creation of an object of Student class
    console.log(s2.name, s2.age, s2.email); //Accessing Instance Variables
    s2.learn(); //Invoking Instance Method

</script>