const body = document.querySelector('body')

body.className='body'

const container = document.createElement('div')
container.className='container'

body.appendChild(container);

const header = document.createElement('div')
header.className='header'

container.appendChild(header)

const profile = document.createElement('div')
profile.className='profile'

header.appendChild(profile)

const img = document.createElement('img')
img.src = 'images/profile.jpg'
img.className='img'

profile.appendChild(img)

const divider = document.createElement('div')
divider.className='divider'

header.appendChild(divider)

const nameBox = document.createElement('div')
nameBox.className='nameBox'

header.appendChild(nameBox)

const user = document.createElement('p')
user.innerText='BRIAN DUDEY'
user.className='name'

nameBox.appendChild(user)

const contact = document.createElement('p')
contact.innerText = 'N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com'
contact.className='contact'

container.appendChild(contact)

const dividerH = document.createElement('div')
dividerH.className='dividerH'

container.appendChild(dividerH)

const box = document.createElement('div')
box.className='box'

container.appendChild(box)

const b1 = document.createElement('div')
b1.className='b1'

box.appendChild(b1)

const dividerV = document.createElement('div')
dividerV.className='dividerV'

box.appendChild(dividerV)

const b2 = document.createElement('div')
b2.className='b2'

box.appendChild(b2)

const row = document.createElement('div')
row.className='row'

b1.appendChild(row)

const iconContainer = document.createElement('div')
iconContainer.className='iconContainer'

row.appendChild(iconContainer)

const icon = document.createElement('i')
icon.classList.add("fa-solid", "fa-user")
icon.style.cssText='color:#fabe28; font-size:20px ';

iconContainer.appendChild(icon)

const profileText = document.createElement('p')
profileText.innerText = 'Profile'
profileText.className='t1'

row.appendChild(profileText)

const cont1 = document.createElement('p')
cont1.innerText = 'Innovative optimized solution seeker, Excited to be at the deployment phase of my new carreer as a web developer. Excited to be at the deployment phase of my new carreer as a web developer'
cont1.className='t2'

b1.appendChild(cont1)

const row1 = document.createElement('div')
row1.className='row'

b1.appendChild(row1)

const iconContainer1 = document.createElement('div')
iconContainer1.className='iconContainer'

row1.appendChild(iconContainer1)

const icon1 = document.createElement('i')
icon1.classList.add("fa-solid", "fa-flask")
icon1.style.cssText='color:#fabe28; font-size:20px ';

iconContainer1.appendChild(icon1)

const profileText1 = document.createElement('p')
profileText1.innerText = 'Skills'
profileText1.className='t1'

row1.appendChild(profileText1)

const skillText = document.createElement('p')
skillText.innerText = 'Technical Skills'
skillText.className='t3'

b1.appendChild(skillText)

const flex1 = document.createElement('div')
flex1.className='row1'

b1.appendChild(flex1)

const s1 = document.createElement('p')
s1.innerText = 'Javascript'
s1.className='t2'
flex1.appendChild(s1)

const input = document.createElement('input')
input.setAttribute('type','range')
input.setAttribute('value','80')
flex1.appendChild(input)

const flex2 = document.createElement('div')
flex2.className='row1'

b1.appendChild(flex2)

const s2 = document.createElement('p')
s2.innerText = 'CSS'
s2.className='t2'
flex2.appendChild(s2)

const input1 = document.createElement('input')
input1.setAttribute('type','range')
input1.setAttribute('value','90')
flex2.appendChild(input1)

const flex3 = document.createElement('div')
flex3.className='row1'

b1.appendChild(flex3)

const s3 = document.createElement('p')
s3.innerText = 'HTML'
s3.className='t2'
flex3.appendChild(s3)

const input2 = document.createElement('input')
input2.setAttribute('type','range')
input2.setAttribute('value','80')
flex3.appendChild(input2)

const flex4 = document.createElement('div')
flex4.className='row1'

b1.appendChild(flex4)

const s4 = document.createElement('p')
s4.innerText = 'React'
s4.className='t2'
flex4.appendChild(s4)

const input3 = document.createElement('input')
input3.setAttribute('type','range')
input3.setAttribute('value','70')
flex4.appendChild(input3)

const flex5 = document.createElement('div')
flex5.className='row1'

b1.appendChild(flex5)

const s5 = document.createElement('p')
s5.innerText = 'Redux'
s5.className='t2'
flex5.appendChild(s5)

const input4 = document.createElement('input')
input4.setAttribute('type','range')
input4.setAttribute('value','90')
flex5.appendChild(input4)

const skillText1 = document.createElement('p')
skillText1.innerText = 'Additional Skills'
skillText1.className='t3'

b1.appendChild(skillText1)

const flex6 = document.createElement('div')
flex6.className='row1'

b1.appendChild(flex6)

const s6 = document.createElement('p')
s6.innerText = 'Project Management'
s6.className='t2'
flex6.appendChild(s6)

const input5 = document.createElement('input')
input5.setAttribute('type','range')
input5.setAttribute('value','80')
flex6.appendChild(input5)

const flex7 = document.createElement('div')
flex7.className='row1'

b1.appendChild(flex7)

const s7 = document.createElement('p')
s7.innerText = 'Recruitment'
s7.className='t2'
flex7.appendChild(s7)

const input6 = document.createElement('input')
input6.setAttribute('type','range')
input6.setAttribute('value','70')
flex7.appendChild(input6)

const flex8 = document.createElement('div')
flex8.className='row1'

b1.appendChild(flex8)

const s8 = document.createElement('p')
s8.innerText = 'Buisness Development'
s8.className='t2'
flex8.appendChild(s8)

const input7 = document.createElement('input')
input7.setAttribute('type','range')
input7.setAttribute('value','90')
flex8.appendChild(input7)

const row2 = document.createElement('div')
row2.className='row'

b1.appendChild(row2)

const iconContainer2 = document.createElement('div')
iconContainer2.className='iconContainer'

row2.appendChild(iconContainer2)

const icon2 = document.createElement('i')
icon2.classList.add("fa-solid", "fa-briefcase")
icon2.style.cssText='color:#fabe28; font-size:20px ';

iconContainer2.appendChild(icon2)

const profileText2 = document.createElement('p')
profileText2.innerText = 'Work Experience'
profileText2.className='t1'

row2.appendChild(profileText2)

const row3 = document.createElement('div')
row3.className='row1'

b1.appendChild(row3)

const exp = document.createElement('p')
exp.innerHTML='<p>Event Manager</p> <br/> <p>Presents Washington DC</p>'
exp.className='t4'

row3.appendChild(exp)

const date = document.createElement('p')
date.innerText = '3/2019-02/2021'
date.className='t4'

row3.appendChild(date)

const li = document.createElement('li')
li.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships'
li.className='t2'

b1.appendChild(li)

const li1 = document.createElement('li')
li1.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships'
li1.className='t2'

b1.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships'
li2.className='t2'

b1.appendChild(li2)

const row4 = document.createElement('div')
row4.className='row'

b2.appendChild(row4)

const iconContainer3 = document.createElement('div')
iconContainer3.className='iconContainer'

row4.appendChild(iconContainer3)
const icon3 = document.createElement('i')
icon3.classList.add("fa-solid", "fa-briefcase")
icon3.style.cssText='color:#fabe28; font-size:20px ';

iconContainer3.appendChild(icon3)

const exp2 = document.createElement('p')
exp2.innerText = 'Work Experience'
exp2.className='t1'

row4.appendChild(exp2)

const row5 = document.createElement('div')
row5.className='row1'

b2.appendChild(row5)

const exp3 = document.createElement('p')
exp3.innerHTML='<p>Event Manager</p> <br/> <p>Presents Washington DC</p>'
exp3.className='t4'

row5.appendChild(exp3)

const date1 = document.createElement('p')
date1.innerText = '3/2019-02/2021'
date1.className='t4'

row5.appendChild(date1)

var li3 = document.createElement('li')
li3.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation'
li3.className='t2'

b2.appendChild(li3)

var li3 = document.createElement('li')
li3.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation'
li3.className='t2'

b2.appendChild(li3)

var li3 = document.createElement('li')
li3.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation'
li3.className='t2'

b2.appendChild(li3)

const row6 = document.createElement('div')
row6.className='row'

b2.appendChild(row6)

const iconContainer4 = document.createElement('div')
iconContainer4.className='iconContainer'

row6.appendChild(iconContainer4)
const icon4 = document.createElement('i')
icon4.classList.add("fa-solid", "fa-graduation-cap")
icon4.style.cssText='color:#fabe28; font-size:20px ';

iconContainer4.appendChild(icon4)

const exp4 = document.createElement('p')
exp4.innerText = 'Education'
exp4.className='t1'

row6.appendChild(exp4)

const row7 = document.createElement('div')
row7.className='row1'

const exp5 = document.createElement('p')
exp5.innerHTML='<p>Event Manager</p> <br/> <p>Presents Washington DC</p>'
exp5.className='t4'

row7.appendChild(exp5)

const date2 = document.createElement('p')
date2.innerText = '3/2019-02/2021'
date2.className='t4'

row7.appendChild(date2)

b2.appendChild(row7)

const cont2 = document.createElement('p')
cont2.innerText = 'Innovative optimized solution seeker, Excited to be at the deployment phase of my new carreer as a web developer. Excited to be at the deployment phase of my new carreer as a web developer'
cont2.className='t2'

b2.appendChild(cont2)

var li4 = document.createElement('li')
li4.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships'
li4.className='t2'

b2.appendChild(li4)

var li4 = document.createElement('li')
li4.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships'
li4.className='t2'

b2.appendChild(li4)

var li4 = document.createElement('li')
li4.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships'
li4.className='t2'

b2.appendChild(li4)

var li4 = document.createElement('li')
li4.innerText = 'Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships and on-site facilitation Leads Executive all phases of event planning and production spanning committee recruitment training,vendor relationships'
li4.className='t2'

b2.appendChild(li4)

const row8 = document.createElement('div')
row8.className='row1'

const exp6 = document.createElement('p')
exp6.innerHTML='<p><strong>BA, English</strong></p> <br/> <p>University of California, Los Angles</p>'
exp6.className='t4'

row8.appendChild(exp6)

const date3 = document.createElement('p')
date3.innerText = '3/2019-02/2021'
date3.className='t4'

row8.appendChild(date3)

b2.append(row8)