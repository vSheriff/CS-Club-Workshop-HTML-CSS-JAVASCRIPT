var blogEntries = [
	{
		title: "Monday",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus ut augue elementum molestie. Nulla mattis neque vitae orci bibendum tincidunt. Nulla in congue metus, porttitor ullamcorper dolor. Fusce mollis ligula vel commodo convallis. Pellentesque ultrices accumsan nisi non luctus. Pellentesque ex mauris, pellentesque quis aliquet in, consequat quis urna. Vivamus sed condimentum metus. Mauris vel magna non ex fermentum mollis. Vivamus eget urna iaculis, ultrices quam eget, semper felis. Nam ullamcorper, ante et tincidunt fringilla, felis enim scelerisque ligula, venenatis euismod neque risus sit amet lectus. Maecenas lacinia enim non nisi viverra, vel dapibus urna mollis. Praesent nisi sem, scelerisque in nisi vitae, fringilla lacinia sem. Fusce mollis porttitor tempus. Duis odio elit, sollicitudin in urna non, interdum egestas libero. Nam a pellentesque nisl, et dapibus augue. Aenean quis sem et metus egestas interdum ut eu nisi. "
	
		
	},
	{
		title: "Wednesday",
		text: "Duis a mollis turpis, eget dignissim nisl. Phasellus maximus nisi nec velit imperdiet, eget condimentum metus euismod. Sed eu justo faucibus, pretium dui et, dignissim est. Cras sodales aliquet ipsum, vitae facilisis ex accumsan ac. In interdum nisi sodales eros sollicitudin faucibus. Phasellus ut dignissim nunc. Aliquam ac diam felis. Proin nulla nisi, venenatis vitae quam quis, sollicitudin imperdiet neque. Sed ac sem risus. Sed gravida commodo erat a ultrices. Duis vel erat varius, dapibus augue in, ullamcorper dui. Donec convallis metus eget vestibulum ultrices. Donec sed turpis scelerisque, faucibus lorem ac, mollis mauris. Fusce posuere lacinia nulla, eu venenatis sapien sagittis in. In blandit lobortis dolor iaculis fermentum. "
	},
	{
		title: "Friday",
		text: "Ut eget turpis pellentesque, accumsan felis at, elementum neque. Morbi sagittis sem ut diam pulvinar, non tempus arcu tempor. Nunc ultrices mi arcu, non ultrices magna pulvinar ut. Sed interdum, mi ornare imperdiet varius, enim enim ultricies felis, nec gravida nibh ex tristique libero. Praesent posuere magna ligula, vel vehicula erat pretium quis. Sed sodales interdum risus, at lobortis risus congue quis. Nullam accumsan sapien eget congue pretium. Duis convallis massa velit, aliquet fringilla nulla dictum a. In eleifend ultricies ultricies. Ut lacus nibh, ornare laoreet lectus eu, sollicitudin tincidunt ligula. Vivamus suscipit mi a congue accumsan. Aenean quam lectus, pharetra vitae rutrum nec, facilisis nec ligula. Pellentesque vulputate semper finibus. Etiam dignissim ornare risus non eleifend. Maecenas porttitor felis varius ex facilisis lacinia. Cras ultricies elit quis vehicula luctus. "
	}
]
function loadBlog(){
	var blog=document.getElementById("blog");
for(var i = 0; i < blogEntries.length; i++){
		var title = document.createElement("h2");
		title.innerHTML = blogEntries[i].title;
		blog.appendChild(title);
		var text = document.createElement("p");
		text.innerHTML = blogEntries[i].text;
		blog.appendChild(text);
	}
	goto('blog');
}
//alternative to this, at least for this example, would be (function ...)(); 
window.onreadystatechange = loadBlog(); 

function goto(section){
	var content = document.getElementById("content");
	content.className = "";
	content.classList.add(section);
}