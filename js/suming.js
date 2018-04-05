//下拉框
{
    let box=document.querySelectorAll(".head_left_wang1");
    let top=document.querySelectorAll(".head_left_wang1  .left_wenzi1");
    let bottom=document.querySelectorAll(".head_xiala");
    console.log(bottom);
    console.log(top);
    console.log(box);
    box.forEach(function(ele,index){
        ele.onmouseenter=function(){

            bottom[index].style.height="auto";
            bottom[index].style.display="block";
        }
        ele.onmouseleave=function(){
            bottom[index].style.height="0";
            bottom[index].style.display="none";

        }
    });
}
// banner
{
	let imgs=document.querySelectorAll(".banner_img1");
	let pagers=document.querySelectorAll(".quan");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	// console.dir(banner);
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(var i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
				// (ele/this/index)等价替换
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	//自动执行
	var n=0;
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
	
      for(var i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}

			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	//
	let t=setInterval(move,2000);
	
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		 t=setInterval(move,2000);
		};
	let flag=true;
	next.onclick=function(){
		// if(flag){
		// 	flag=false;
			move();
		// }
		
	};
	prev.onclick=function(){
		// if(flag){
		// 	flag=false;
			n-=2;
			move();
		// }
		
	};

	// imgs.forEach(function(ele,index){
	// 		// console.log(this);
	// ele.addEventListener("transitionend", function(){
	// 			flag=true;
	// 		})
	// },2000);
}		

//悬浮窗
{
	// <script>
	let totop=document.querySelector(".top1");
	let topbar=document.querySelector(".topbar");

	let leftbar=document.querySelector(".leftbar");
	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
	let scroll=document.documentElement.scrollTop;
	let t=setInterval(function(){
		scroll-=200;
		if(scroll<0){
			scroll=0;
			clearInterval(t);
		}
		document.documentElement.scrollTop=scroll;
	},6);
		
	
 }
	//
	window.onscroll=function(){
		let lt=document.documentElement.scrollTop;
		if(lt>1500){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(lt>2200&&lt<7000){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}
	
	}



	let box=document.querySelector(".topbar_content  .fenlei");
	// let top=document.querySelector(".fenlei  fenlei_icon1,");
	let bottom=document.querySelector(".fenlei .banner_nav");
	console.log(bottom);
	
		box.onmouseenter=function(){
			bottom.style.height="442px";
			bottom.style.overflow="unset";
		}
		box.onmouseleave=function(){
			bottom.style.height="0";
			bottom.style.overflow="hidden";
			 }


	let lables=document.querySelectorAll(".banner_nav  .nav_cdh1");
	let menu=document.querySelectorAll(".cedanghang1");
	console.log(menu);
	console.log(lables);
	let obj=menu[0];
	lables.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menu[index].style.display="block";
			obj=menu[index];
			}
		ele.onmouseleave=function(){
			menu[index].style.display="none";
		}
	});	
}
//左悬浮窗
{
	let tips=document.querySelectorAll(".tip");
	let containers=document.querySelectorAll(".container");
	let flag=true;
	console.log(containers);
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			flag=false;
			let ot=containers[index].offsetTop-50;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time==200){
					clearInterval(t);
					flag=true;

				}
				document.documentElement.scrollTop=now;
			},25)

		}
	});
	window.addEventListener("scroll",function(){
		if(flag){
			let st=document.documentElement.scrollTop;
			for(let i=0;i<containers.length;i++){
				if(st>=containers[i].offsetTop-51){
					for(let i=0;i<tips.length;i++){
						tips[i].classList.remove("active3");
					}
					tips[i].classList.add("active3");
					
				}

			}
		}
	});

}



//大聚惠
{
	const next=document.querySelector(".dajuhui_btnr");
	const prev=document.querySelector(".dajuhui_btnl");
	const inner=document.querySelector(".inner_list");
	console.log(next);
	console.log(prev);
	console.log(inner);
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 0.5s";
			inner.style.marginLeft=-1000*n+"px";
		}
		
	
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 0.5s";
			inner.style.marginLeft=-1000*n+"px";
		}
	}
	inner.addEventListener("transitionend", function(){
		flag=true;
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-1000px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-3000px";
			n=3;
		}
	})
	
}
//侧导航
{
	let lables=document.querySelectorAll(".banner_nav  .nav_cdh");
	let menu=document.querySelectorAll(".cedanghang");
	console.log(menu);
	console.log(lables);
	let obj=menu[0];
	lables.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menu[index].style.display="block";
			obj=menu[index];
			}
		ele.onmouseleave=function(){
			menu[index].style.display="none";
		}
	});
		
}
//排行榜
{
	const next=document.querySelector(".seconr_btnr");
	const prev=document.querySelector(".second_btnl");
	const inner=document.querySelector(".second_inner_list ");
	const pages=document.querySelectorAll(".pagebox1 li");
	console.log(pages);
	console.log(next);
	console.log(prev);
	console.log(inner);
	let n=1;
	let flag=true;
	pages[1].onclick=function(){
        pages[3].classList.remove("active");
        inner.style.transition="all 0.5s";
        inner.style.marginLeft=-390+"px";
        console.log(inner.style.marginLeft);
	}
    pages[2].onclick=function(){
        pages[1].classList.remove("active");
        inner.style.transition="all 0.5s";
        inner.style.marginLeft=-780+"px";
        console.log(inner.style.marginLeft);
    }
    pages[3].onclick=function(){
        pages[2].classList.remove("active");
        inner.style.transition="all 0.5s";
        inner.style.marginLeft=-1170+"px";
        console.log(inner.style.marginLeft);
    }


	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 0.5s";
			inner.style.marginLeft=-390*n+"px";
			console.log(n);
			pages[n].classList.add("active");
            pages[n-1].classList.remove("active");

		}

	}

	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all  0.5s";
			inner.style.marginLeft=-390*n+"px";
			console.log(n);
            pages[n].classList.add("active");
            pages[n+1].classList.remove("active");
		}

	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-390px";
            pages[n-3].classList.add("active");
            pages[n-1].classList.remove("active");
			n=1;


		}
		if(n===0){
			inner.style.transition="none";

			inner.style.marginLeft="-1170px";
            pages[n+3].classList.add("active");
            pages[n+1].classList.remove("active");
			n=3;

		}
	})

}
//右导航
{
	// let =document.querySelector(".middle_item");
	let icons=document.querySelectorAll(".middle_item");
	let lefts=document.querySelectorAll(".leftdiv");
    let top=document.querySelector(".left_top");
    console.log(top);
    top.onclick=function(){
            let scroll=document.documentElement.scrollTop;
            let t=setInterval(function(){
                scroll-=200;
                if(scroll<0){
                    scroll=0;
                    clearInterval(t);
                }
                document.documentElement.scrollTop=scroll;
            },6);
	}
	console.log(lefts);
	icons.forEach(function(ele,index){
		ele.onmouseenter=function(){

				lefts[index].style.width="50px";
				lefts[index].style.display="block";
				lefts[index].style.color="#fff";

			
		}

		ele.onmouseleave=function(){

				lefts[index].style.width="0";
				lefts[index].style.display="none";

			
			
			 }	
	
	})
		
		
	
	
	
}
//视频
{
    const next=document.querySelector(".shipin_btnr");
    const prev=document.querySelector(".shipin_btnl");
    const inner=document.querySelector(".shipin_inner");
    console.log(next);
    console.log(prev);
    console.log(inner);
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 0.5s";
            inner.style.marginLeft=-390*n+"px";
        }


    }
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 0.5s";
            inner.style.marginLeft=-390*n+"px";
        }
    }
    inner.addEventListener("transitionend", function(){
        flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-390px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1170px";
            n=3;
        }
    })

}