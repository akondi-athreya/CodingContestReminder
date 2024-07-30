function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateLanguageBoxes() {
    const boxes = document.querySelectorAll('.language-box');
    boxes.forEach(box => {
      if (isElementInViewport(box)) {
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', animateLanguageBoxes);
  window.addEventListener('load', animateLanguageBoxes);











  function createTeam() {
    document.getElementById('main-container').innerHTML = '';
  
    let teamMembers = [
        { 
            name: 'Srujana Balam',
            rollNo: '22MH1A42E9',
            branch: 'AIML',
            college: 'Aditya University',
            skills: 'JavaScript, HTML, CSS',
            imageURL: '../assets/Srujana.jpg',
            linkURL: 'https://www.linkedin.com/in/srujana-balam-55a595258/' 
        },
        { 
            name: 'Alekhya Nam',
            rollNo: '22A91A05J4',
            branch: 'CSE',
            college: 'Aditya University',
            skills: 'JavaScript, HTML, CSS',
            imageURL: '../assets/Alekhya.jpg',
            linkURL: 'https://www.linkedin.com/in/alekhya-nam-49b8682a8/' 
        },
        { 
            name: 'Sripujitha Vemula',
            rollNo: '22A91A61J2',
            branch: 'AIML',
            college: 'Aditya University',
            skills: 'JavaScript, HTML, CSS',
            imageURL: '../assets/Poojitha.jpg',
            linkURL: 'https://www.linkedin.com/in/sri-pujitha-vemula-38b176258/' 
        },
        { 
            name: 'Athreya',
            rollNo: '22MH1A42E7',
            branch: 'AIML',
            college: 'Aditya University',
            skills: 'JavaScript, HTML, CSS',
            imageURL: '../assets/Athreya.jpg',
            linkURL: 'https://www.linkedin.com/in/athreya-akondi-/' 
        },
        { 
            name: 'Ayyapaswamy Y',
            rollNo: '22A91A61J7',
            branch: 'AIML',
            college: 'Aditya University',
            skills: 'JavaScript, HTML, CSS',
            imageURL: '../assets/ppf.jpg',
            linkURL: 'https://www.linkedin.com/in/ayyappa-swamy-yelugubanti-521234258/' 
        },
        { 
            name: 'Jitendrakumar',
            rollNo: '22MH1A05H7',
            branch: 'CSE',
            college: 'Aditya University',
            skills: 'JavaScript, HTML, CSS',
            imageURL: '../assets/Jitendhara.jpg',
            linkURL: 'https://www.linkedin.com/in/jitendra-kumar-530b78260/' 
        }
    ];
  
    teamMembers.forEach((member, index) => {
        let memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
  
        if (Math.random() > 0.5) {
            memberDiv.classList.add('pulse');
        }
        if (Math.random() > 0.5) {
            memberDiv.classList.add('rotate');
        }
  
        let imageDiv = document.createElement('div');
        let image = document.createElement('img');
        image.src = member.imageURL;
        imageDiv.appendChild(image);
  
        let detailsDiv = document.createElement('div');
        let detailsContent = `
            <p><strong>Name:</strong> ${member.name}</p>
            <p><strong>Roll No:</strong> ${member.rollNo}</p>
            <p><strong>Branch:</strong> ${member.branch}</p>
            <p><strong>College:</strong> ${member.college}</p>
            <p><strong>Skills:</strong> ${member.skills}</p>
        `;
        detailsDiv.innerHTML = detailsContent;
  
        let button = document.createElement("button");
        button.style.width = '100px'; 
        button.style.height = '35px'; 
        button.style.backgroundColor = 'blue'; 
        button.style.borderRadius = '5px'; 
        button.style.color = 'white'; 
        button.style.display = 'flex'; 
        button.style.alignItems = 'center'; 
        button.style.justifyContent = 'center'; 
        button.style.marginTop = '15px'; 
        button.style.cursor = 'pointer'; 
        button.style.marginLeft = '135px';
        button.innerText = 'Follow'; 
  
        let link = document.createElement('a');
        link.href = member.linkURL;
        link.target = '_blank';
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';
  
        link.appendChild(button);
  
        memberDiv.appendChild(imageDiv);
        memberDiv.appendChild(detailsDiv);
        memberDiv.appendChild(link);
  
        document.getElementById('main-container').appendChild(memberDiv);
  
        setTimeout(() => {
            memberDiv.classList.add('visible');
        }, index * 100); 
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // function createTeam() {
     
  //     document.getElementById('main-container').innerHTML = '';
   
  //     let teamMembers = [
  //       { 
  //         name: 'Srujana Balam',
  //         rollNo: '22MH1A42E9',
  //         branch: 'AIML',
  //         college: 'Aditya University',
  //         skills: 'JavaScript, HTML, CSS',
  //         imageURL: '../assets/A22MH1A42E9.png',
  //         linkURL: 'https://www.linkedin.com/in/srujana-balam-55a595258/' 
  //       },
  //       { 
  //         name: 'Alekhya Nam',
  //         rollNo: '22A91A05J4',
  //         branch: 'CSE',
  //         college: 'Aditya University',
  //         skills: 'JavaScript, HTML, CSS',
  //         imageURL: '../assets/A22A91A05J4.jpg',
  //         linkURL: 'https://www.linkedin.com/in/alekhya-nam-49b8682a8/' 
  //       },
  //       { 
  //         name: 'sripujitha vemula',
  //         rollNo: '22A91A61J2',
  //         branch: 'AIML',
  //         college: 'Aditya university',
  //         skills: 'JavaScript, HTML, CSS',
  //         imageURL: '../assets/A22A91A61J2.png',
  //         linkURL: 'https://www.linkedin.com/in/sri-pujitha-vemula-38b176258/' 
  //       },
  //       { 
  //         name: 'Athreya',
  //         rollNo: '22MH1A42E7',
  //         branch: 'AIML',
  //         college: 'Aditya university',
  //         skills: 'JavaScript, HTML, CSS',
  //         imageURL:'../assets/Atreya.jpg',
  //         linkURL: 'https://www.linkedin.com/in/athreya-akondi-/' 
  //       },
  //       { 
  //         name: 'Ayyapaswamy Y',
  //         rollNo: '22A91A61J7',
  //         branch: 'AIML',
  //         college: 'Aditya University ',
  //         skills: 'JavaScript, HTML, CSS',
  //         imageURL: '../assets/ppf.jpg',
  //         linkURL: 'https://www.linkedin.com/in/ayyappa-swamy-yelugubanti-521234258/' 
  //       },
  //       { 
  //         name: 'Jitendrakumar',
  //         rollNo: '22MH1A05H7',
  //         branch: 'CSE',
  //         college: 'Aditya university',
  //         skills: 'JavaScript, HTML, CSS',
  //         imageURL: 'https://via.placeholder.com/150',
  //         linkURL: 'https://www.linkedin.com/in/jitendra-kumar-530b78260/' 
  //       }
  //     ];
    
      
  //     teamMembers.forEach((member, index) => {
       
  //       let memberDiv = document.createElement('div');
  //       memberDiv.classList.add('member');
        
        
  //       if (Math.random() > 0.5) {
  //         memberDiv.classList.add('pulse');
  //       }
  //       if (Math.random() > 0.5) {
  //         memberDiv.classList.add('rotate');
  //       }
        
        
  //       let imageDiv = document.createElement('div');
  //       let image = document.createElement('img');
  //       image.src = member.imageURL;
  //       imageDiv.appendChild(image);
        
      
  //       let detailsDiv = document.createElement('div');
  //       let detailsContent = `
  //         <p><strong>Name:</strong> ${member.name}</p>
  //         <p><strong>Roll No:</strong> ${member.rollNo}</p>
  //         <p><strong>Branch:</strong> ${member.branch}</p>
  //         <p><strong>College:</strong> ${member.college}</p>
  //         <p><strong>Skills:</strong> ${member.skills}</p>
  //       `;
  //       detailsDiv.innerHTML = detailsContent;
    
        
  //       let button = document.createElement("div");
  //       button.style.width = '100px'; 
  //       button.style.height = '35px'; 
  //       button.style.backgroundColor = 'blue'; r
  //       button.style.borderRadius = '5px'; 
  //       button.style.color = 'white'; 
  //       button.style.display = 'flex'; 
  //       button.style.alignItems = 'center'; 
  //       button.style.justifyContent = 'center'; 
  //       button.style.marginTop = '15px'; 
  //       button.style.marginLeft = '130px';
  //       button.style.cursor = 'pointer'; 
  //       button.innerText = 'Follow'; 
        
       
  //       let link = document.createElement('a');
  //       link.href = member.linkURL;
  //       link.target = '_blank';
  //       link.style.textDecoration = 'none';
  //       link.style.color = 'inherit';
    
        
  //       link.appendChild(button);
    
  //       memberDiv.appendChild(imageDiv);
  //       memberDiv.appendChild(detailsDiv);
  //       memberDiv.appendChild(link)
        
        
  //       document.getElementById('main-container').appendChild(memberDiv);
    
        
  //       setTimeout(() => {
  //         memberDiv.classList.add('visible');
  //       }, index * 100); 
  //     });
  //   }