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
    ll.innerHTML='x'
    ll1.innerHTML='x'
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


    ll.innerHTML='x'
    ll1.innerHTML='x'
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
    ll.innerHTML='x'
    ll1.innerHTML='x'
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
