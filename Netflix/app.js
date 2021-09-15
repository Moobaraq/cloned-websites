const lists = document.querySelectorAll("#lists")
const ans = document.querySelectorAll('.answer')
const ansArr = Array.prototype.slice.call(ans)

lists.forEach(function(item) {
        const answer = item.getElementsByClassName('answer')[0]
    
    item.addEventListener("click", function() {
        ansArr.forEach(function(a) {
            if (a !== item) {
                a.classList.remove("open");
            }else{
                a.classList.add("open")
            }
        })

        answer.classList.toggle('open')
    });
})

