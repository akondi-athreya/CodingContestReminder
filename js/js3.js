

//     // document.addEventListener('DOMContentLoaded', function () {
//     //     const progressCircle = document.querySelector('.progress-circle .circle');
//     //     const value = 266;
//     //     const total = 3230;
//     //     const percentage = (value / total) * 100;
        
//     //     progressCircle.style.strokeDasharray = `${percentage}, 100`;
//     // });
var data = [{
    values: [222, 600, 130, 50],
    labels: ['Codechef', 'Leetcode', 'GFG', 'CodeForces'],
    type: 'pie',
    marker: {
        colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A6'] // Replace these with your desired colors
    }
}];

var layout = {
    height: 400,
    width: 370,
    paper_bgcolor: '#f0f0f0', // Change this to your desired background color
    plot_bgcolor: '#ffffff'   // Change this to your desired plot background color
};

Plotly.newPlot('dash-ch', data, layout);



//     //   var d = [{
//     //     type: 'bar',
//     //     x: [222,600,130,10],
//     //     y: ['Codechef','Leetcode','GFG','CodeForces'],
//     //     orientation: 'h'
//     //   }];
//     //   var layout = {
//     //     height: 100,
//     //     width: 100
//     //   };
      
//     //   Plotly.newPlot('narutoab', d);
function ma(){
    document.getElementsByClassName('dash-sli--hh')[0].style.display= 'flex','block';
    document.getElementsByClassName('bg')[0].style.display='none';
    document.getElementsByClassName('pf')[0].style.display='none';
    document.getElementsByClassName('dash-main-sli')[0].style.display='flex','block';
    document.getElementsByClassName('dash-chart')[0].style.display='flex','block';
    document.getElementsByClassName('bdg')[0].style.display='none';
    document.getElementsByClassName('prf')[0].style.display='none';
}
function badg(){
    document.getElementsByClassName('dash-sli--hh')[0].style.display='none';
    document.getElementsByClassName('bg')[0].style.display='flex','block';
    document.getElementsByClassName('pf')[0].style.display='none';
    document.getElementsByClassName('dash-main-sli')[0].style.display='none';
    document.getElementsByClassName('dash-chart')[0].style.display='none';
    document.getElementsByClassName('bdg')[0].style.display='flex','block';
    document.getElementsByClassName('prf')[0].style.display='none';
    
}
function prof(){
    document.getElementsByClassName('dash-sli--hh')[0].style.display='none';
    document.getElementsByClassName('bg')[0].style.display='none';
    document.getElementsByClassName('pf')[0].style.display='flex','block';
    document.getElementsByClassName('dash-main-sli')[0].style.display='none';
    document.getElementsByClassName('dash-chart')[0].style.display='none';
    document.getElementsByClassName('bdg')[0].style.display='none';
    document.getElementsByClassName('prf')[0].style.display='flex','block';
}

var x=true
var y=true
var z=true
function lh(){
    if (x==true){ 
    document.getElementsByClassName('bg-hl-1')[0].style.display='flex','block';
    document.getElementsByClassName('bg-hl-1')[1].style.display='flex','block';
    document.getElementsByClassName('bg-hc-1')[0].style.display='none';
    document.getElementsByClassName('bg-hc-1')[1].style.display='none';
    document.getElementsByClassName('bg-hcf-1')[0].style.display='none';
    document.getElementsByClassName('bg-hcf-1')[1].style.display='none';
    var ll=document.getElementsByClassName('ds-lh')[0];
    var ll1=document.getElementsByClassName('ds-lh')[1];
    var ll2=document.getElementsByClassName('ds-cfh')[0];
    var ll3=document.getElementsByClassName('ds-cfh')[1];
    var ll4=document.getElementsByClassName('ds-ch')[0];
    var ll5=document.getElementsByClassName('ds-ch')[1];
    ll.innerHTML='-'
    ll1.innerHTML='-'
    ll2.innerHTML='+'
    ll3.innerHTML='+'
    ll4.innerHTML='+'
    ll5.innerHTML='+'
    // var ll1=ll.replace('+','x');
    // ll=ll1;
    x=false;
    }
    else{
    document.getElementsByClassName('bg-hl-1')[0].style.display='none';
    document.getElementsByClassName('bg-hl-1')[1].style.display='none';
    var ll=document.getElementsByClassName('ds-lh')[0];
    var ll1=document.getElementsByClassName('ds-lh')[1];
    ll.innerHTML='+'
    ll1.innerHTML='+'
    x=true;
    }
}
function ch(){
    if (y==true){ 
    document.getElementsByClassName('bg-hc-1')[0].style.display='flex','block';
    document.getElementsByClassName('bg-hc-1')[1].style.display='flex','block';
    document.getElementsByClassName('bg-hcf-1')[0].style.display='none';
    document.getElementsByClassName('bg-hcf-1')[1].style.display='none';
    document.getElementsByClassName('bg-hl-1')[0].style.display='none';
    document.getElementsByClassName('bg-hl-1')[1].style.display='none';
    var ll=document.getElementsByClassName('ds-ch')[0];
    var ll1=document.getElementsByClassName('ds-ch')[1];
    var ll2=document.getElementsByClassName('ds-lh')[0];
    var ll3=document.getElementsByClassName('ds-lh')[1];
    var ll4=document.getElementsByClassName('ds-cfh')[0];
    var ll5=document.getElementsByClassName('ds-cfh')[1];


    ll.innerHTML='-'
    ll1.innerHTML='-'
    ll2.innerHTML='+'
    ll3.innerHTML='+'
    ll4.innerHTML='+'
    ll5.innerHTML='+'
    y=false;
    }
    else{
    document.getElementsByClassName('bg-hc-1')[0].style.display='none';
    document.getElementsByClassName('bg-hc-1')[1].style.display='none';
    var ll=document.getElementsByClassName('ds-ch')[0];
    var ll1=document.getElementsByClassName('ds-ch')[1];
    ll.innerHTML='+'
    ll1.innerHTML='+'
    y=true;
    }
}
function cfh(){
    if (z==true){ 
    document.getElementsByClassName('bg-hcf-1')[0].style.display='flex','block';
    document.getElementsByClassName('bg-hcf-1')[1].style.display='flex','block';
    document.getElementsByClassName('bg-hl-1')[0].style.display='none';
    document.getElementsByClassName('bg-hl-1')[1].style.display='none';
    document.getElementsByClassName('bg-hc-1')[0].style.display='none';
    document.getElementsByClassName('bg-hc-1')[1].style.display='none';
    var ll=document.getElementsByClassName('ds-cfh')[0];
    var ll1=document.getElementsByClassName('ds-cfh')[1];
    var ll2=document.getElementsByClassName('ds-lh')[0];
    var ll3=document.getElementsByClassName('ds-lh')[1];
    var ll4=document.getElementsByClassName('ds-ch')[0];
    var ll5=document.getElementsByClassName('ds-ch')[1];

    ll.innerHTML='-'
    ll1.innerHTML='-'
    ll2.innerHTML='+'
    ll3.innerHTML='+'
    ll4.innerHTML='+'
    ll5.innerHTML='+'
    z=false;
    }
    else{
    document.getElementsByClassName('bg-hcf-1')[0].style.display='none';
    document.getElementsByClassName('bg-hcf-1')[1].style.display='none';
    var ll=document.getElementsByClassName('ds-cfh')[0];
    var ll1=document.getElementsByClassName('ds-cfh')[1];
    ll.innerHTML='+'
    ll1.innerHTML='+'
    z=true;
    }

}

codechef_data = {}
function fun(){
    fetch('https://codechef-api.vercel.app/handle/ayyappa19')
        .then(data => data.json())
        .then(data => {
            codechef_data = data;
            console.log(codechef_data);
        })
        .catch(error => console.error('Error fetching', error));
}

fun();
// setTimeout(() => {
//     console.log(codechef_data);
//     code_rate();
// },2000)
// function code_rate(){
//     var king = document.getElementsByClassName('cchf2')[0];
//     console.log(king);
//     king.innerHTML = codechef_data.currentRating;
// }
// document.getElementsByClassName('dot-wave')[0].style.display = 'flex';
// var up_slick = document.getElementsByClassName('main-sli-dd')[0];
// up_slick.style.display = 'none ';
// console.log(up_slick)
// tsunade106();
// function tsunade106(){
//     setTimeout(()=>{
//         document.getElementsByClassName('dot-wave')[0].style.display = 'none';
//         document.getElementsByClassName('main-sli-dd')[0].style.display = 'flex ','block';

        

//     },3000)
// }

$('.dash-sli').slick({
    dots:true,
    autoplay:true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    // cssEase: 'linear',
    pauseOnDotsHover: true,
    infinite: true,
    arrows:false,
    slidesToShow: 1,
    speed:300,
    slidesToScroll: 1,
    });
    $('.dash-sli--hh').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        // cssEase: 'linear',
        pauseOnDotsHover: true,
        infinite: true,
        arrows:false,
        slidesToShow: 1,
        speed:300,
        slidesToScroll: 1,
        });