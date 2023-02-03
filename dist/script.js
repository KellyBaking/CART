var dessertlist = [
  {name:'瑪德蓮', price: '80', num: 1, unit: '1 piece', url: 'https://i.imgur.com/MlARDs7.png'
  },
  {name: '手工餅乾', price: '50', num: 1, unit: '3 pieces', url: 'https://i.imgur.com/rWzVvnZ.png'
  },
  {name:'巴斯克乳酪蛋糕', price: '600', num: 1, unit: '6"', url: 'https://i.imgur.com/ULffgRz.png'  
  },
  {name:'軟餅乾', price: '25', num: 1, unit: '1 piece', url: 'https://i.imgur.com/ZnqhsXL.png'    
  },
  {name:'手指餅乾', price: '50', num: 1, unit: '3 pieces', url: 'https://i.imgur.com/042gsVV.png'    
  },
  {name:'紅茶戚風', price: '550', num: 1, unit: '6"', url: 'https://i.imgur.com/Mv0qI3I.png'    
  },
  {name:'可麗露', price: '80', num: 1, unit: '1 piece', url: 'https://i.imgur.com/oDOSs3H.png'    
  },
  {name:'椪糖', price: '20', num: 1, unit: '1 piece', url: 'https://i.imgur.com/hENR5nA.png'    
  },
  {name:'奶凍捲', price: '350', num: 1, unit: '1 roll', url: 'https://i.imgur.com/jtd1RCX.png'    
  },
];

// ------------------------------------------------------------------------------
var dessertlist_CAKE = [
  {name:'紅茶戚風', price: '550', num: 1, unit: '6"', url: 'https://i.imgur.com/Mv0qI3I.png'    
  },
  {name:'可麗露', price: '80', num: 1, unit: '1 piece', url: 'https://i.imgur.com/oDOSs3H.png'    
  },
  {name:'奶凍捲', price: '350', num: 1, unit: '1 roll', url: 'https://i.imgur.com/jtd1RCX.png'   
  },
  {name:'瑪德蓮', price: '80', num: 1, unit: '1 piece', url: 'https://i.imgur.com/MlARDs7.png'
  },
  {name:'巴斯克乳酪蛋糕', price: '600', num: 1, unit: '6"', url: 'https://i.imgur.com/ULffgRz.png'  
  }
];

//-------------------------------------------------------------------------------

var dessertlist_COOKIE = [
  
  {name:'軟餅乾', price: '25', num: 1, unit: '1 piece', url: 'https://i.imgur.com/ZnqhsXL.png'    
  },
  {name:'手指餅乾', price: '50', num: 1, unit: '3 pieces', url: 'https://i.imgur.com/042gsVV.png'    
  },
  {name:'椪糖', price: '20', num: 1, unit: '1 piece', url: 'https://i.imgur.com/hENR5nA.png'    
  },
  {name: '手工餅乾', price: '50', num: 1, unit: '3 pieces', url: 'https://i.imgur.com/rWzVvnZ.png'
  },
];




// 顯示 ALL 清單------------------------------------------------------------------


var dessert_html = "<li><img src='{{url}}'/><div class='name'>{{name}}</div><div class='price'>{{price}} ({{unit}})</div><div class='buy'><div id='minus+i' class='minus'>-</div><div id='num+i' class='num'>{{num}}</div><div id='plus+i' class='plus'>+</div><i class='fa-solid fa-cart-shopping addtocart'></i></div></li>"



function showALL(){
  // 渲染出li前先清除,避免每按一次重複產出
  $(".list").html("");
  
  for(var i=0;i<dessertlist.length;i++){
    
    var current_dessert_html = 
        dessert_html.replace("{{url}}",dessertlist[i].url)
                    .replace("{{name}}",dessertlist[i].name)
                    .replace("{{price}}",dessertlist[i].price)
                    .replace("{{unit}}",dessertlist[i].unit)
                    .replace("{{num}}",dessertlist[i].num)
                    .replace("num+i","num_"+i)
                    .replace("minus+i","minus_"+i)
                    .replace("plus+i","plus_"+i);


    $(".list").append(current_dessert_html);
    
    $("ul").css("justify-content","space-evenly")

  //   $(".plus").click(function(){
  //     var pp = $(".plus").index(this);
  //     dessertlist[pp].num +=1;
  //     showALL();
  // })      
 };

  $(".plus").click(function(){
    // $(this).index()會返回此plus標籤在子元素中的ID
    // 此案例返回2 (0-minus / 1-num)
    
    // $(".plus").index(this)
    // 目前按的plus標籤(this)是第幾個plus
    // https://learn.jquery.com/using-jquery-core/understanding-index/
    var pp = $(".plus").index(this);
    console.log(pp)
    dessertlist[pp].num +=1;
    showALL();
  });
  
  $(".minus").click(function(){
    var mm = $(".minus").index(this);
    if(dessertlist[mm].num<=1)
      dessertlist[mm].num = 1
    else
      dessertlist[mm].num-=1;
    showALL(); 
  });
  
  addtocartALL();
};


// 顯示 CAKE 清單-----------------------------------------------------------------


function showCAKE(){
  $(".list").html("");
  
  for(var i=0;i<dessertlist_CAKE.length;i++){
  
  var current_dessert_html = 
      dessert_html.replace("{{url}}",dessertlist_CAKE[i].url)
                  .replace("{{name}}",dessertlist_CAKE[i].name)
                  .replace("{{price}}",dessertlist_CAKE[i].price)
                  .replace("{{unit}}",dessertlist_CAKE[i].unit)
                  .replace("{{num}}",dessertlist_CAKE[i].num)
                  .replace("num+i","num_"+i)
                  .replace("minus+i","minus_"+i)
                  .replace("plus+i","plus_"+i)
                  
   
  $(".list").append(current_dessert_html)
    
  $("li").css("margin-left","25px")
  $("ul").css("justify-content","flex-start")
    
 };
  
  $(".plus").click(function(){
    var pp = $(".plus").index(this);
    dessertlist_CAKE[pp].num +=1;
    
    // 要再調一次css不然點+ / -的時候會跑版
    // 而且要show完後調整css
    // css改成放迴圈中,只要寫一次(?
    showCAKE();

  });
  
  
  $(".minus").click(function(){
    var mm = $(".minus").index(this);
    if(dessertlist_CAKE[mm].num<=1)
      dessertlist_CAKE[mm].num = 1
    else
      dessertlist_CAKE[mm].num-=1;
    
    
    showCAKE();

  });
  
  addtocartCAKE();
  
};


// 顯示 COOKIE 清單---------------------------------------------------------------



function showCOOKIE(){
  $(".list").html("");
  
  for(var i=0;i<dessertlist_COOKIE.length;i++){
  
  var current_dessert_html = 
      dessert_html.replace("{{url}}",dessertlist_COOKIE[i].url)
                  .replace("{{name}}",dessertlist_COOKIE[i].name)
                  .replace("{{price}}",dessertlist_COOKIE[i].price)
                  .replace("{{unit}}",dessertlist_COOKIE[i].unit)
                  .replace("{{num}}",dessertlist_COOKIE[i].num)
                  .replace("num+i","num_"+i)
                  .replace("minus+i","minus_"+i)
                  .replace("plus+i","plus_"+i)
                  
   
  $(".list").append(current_dessert_html)
    
  $("li").css("margin-left","25px")
  $("ul").css("justify-content","flex-start")  
    
 };
  
  $(".plus").click(function(){
    var pp = $(".plus").index(this);
    dessertlist_COOKIE[pp].num +=1;
    
    showCOOKIE();

  });
  
  $(".minus").click(function(){
    var mm = $(".minus").index(this);
    if(dessertlist_COOKIE[mm].num<=1)
      dessertlist_COOKIE[mm].num = 1
    else
      dessertlist_COOKIE[mm].num-=1;
    
    
    showCOOKIE();

  });
  
  addtocartCOOKIE();

};


// ------------------------------------------------------------------------------


showALL();



$(".all").click(function(){
  
  for(var a=0;a<dessertlist.length;a++){
    dessertlist[a].num=1;   
  };

  showALL();
  
  $(".all").addClass("border_bottom")
  $(".cake").removeClass("border_bottom")
  $(".cookie").removeClass("border_bottom")
});


$(".cake").click(function(){
  
  for(var a=0;a<dessertlist_CAKE.length;a++){
    dessertlist_CAKE[a].num=1;   
  };
  
  showCAKE();
  
  $(".cake").addClass("border_bottom")
  $(".all").removeClass("border_bottom")
  $(".cookie").removeClass("border_bottom")
});


$(".cookie").click(function(){
  
  for(var a=0;a<dessertlist_COOKIE.length;a++){
    dessertlist_COOKIE[a].num=1;   
  };
  
  showCOOKIE();
  
  $(".cookie").addClass("border_bottom")
  $(".all").removeClass("border_bottom")
  $(".cake").removeClass("border_bottom") 
});


$(".x").click(function(){
  $(".cart").css("height","0%")
  $(".cart").css("box-shadow","")
  $(".grey_screen").removeClass("greyscreen")
});


$(".barcart, .circle").click(function(){
  $(".cart").css("height","80%")
  $(".cart").css("box-shadow","0 0 10px 3px #ff9999")
  $(".grey_screen").addClass("greyscreen")
});



// 加入購物車(cart_list 陣列) ----------------------------------------------------


var cart_list=[];
var new_list=[
  {name:'瑪德蓮', price: '80', num: 0},
  {name: '手工餅乾', price: '50', num: 0},
  {name:'巴斯克乳酪蛋糕', price: '600', num: 0},
  {name:'軟餅乾', price: '25', num: 0},
  {name:'手指餅乾', price: '50', num: 0},
  {name:'紅茶戚風', price: '550', num: 0},
  {name:'可麗露', price: '80', num: 0},
  {name:'椪糖', price: '20', num: 0},
  {name:'奶凍捲', price: '350', num: 0},
];


function newlist(){
  for(var c=0;c<new_list.length;c++){
    for(var v=0;v<cart_list.length;v++){
      if(new_list[c].name == cart_list[v].name)
        new_list[c].num+=cart_list[v].num
    }
  }
  // 加完數量後就清空cart_list
  // 第二次加入購物車時數量才不會重複加
  cart_list.length=0
}


function addtocartALL(){
  $(".addtocart").click(function(){
    var allall = $(".addtocart").index(this)
    var math = $("#num_"+allall).text()
    cart_list.push({
    name: dessertlist[allall].name, price: dessertlist[allall].price, num: parseInt(math)
    })
    newlist();
    showcartlist();
  })
  
};


function addtocartCAKE(){
  $(".addtocart").click(function(){
    var CACA = $(".addtocart").index(this)
    var mathCA = $("#num_"+CACA).text()
    cart_list.push({
    name: dessertlist_CAKE[CACA].name, price: dessertlist_CAKE[CACA].price, num: parseInt(mathCA)
    })
    newlist();
    showcartlist();
    
  })
};


function addtocartCOOKIE(){
  $(".addtocart").click(function(){
    var COCO = $(".addtocart").index(this)
    var mathCO = $("#num_"+COCO).text()
    cart_list.push({
    name: dessertlist_COOKIE[COCO].name, price: dessertlist_COOKIE[COCO].price, num: parseInt(mathCO)
    })
    newlist();
    showcartlist();
    
  })
};




// 顯示購物車清單-----------------------------------------------------------------

// 注意!!
// 總價append迴圈外, 清單append回圈內
// 購物車上的數字一併寫在function中才能作用???
// total qty也是append在迴圈外

var carthtml = "<div class='shopping'><div class='cartname'>{{name}}</div><div class='cartprice'>{{price}}</div><div class='calc'><div class='mi' data_mi='{{mi}}'>-</div><div class='nu'>{{num}}</div><div class='pl' data_pl='{{pl}}'>+</div></div><div class='delete' data_del='{{del}}'>x</div></div>"

var totalhtml = "<div class='totallist'><div class='total'>Total</div><div class='totalprice'>{{price}}</div></div></div>"




function showcartlist(){
  
  // 產生清單前先刪除原本的html
  $("#cartlist").html("");
  $("#total").html("");
  
  
  // 設置總價=0
  // 之後再讓總價=總價+p
   var totalprice = 0
   var totalqty = 0
    
    for(var s=0;s<new_list.length;s++){
    var cur_carthtml = 
      carthtml.replace("{{name}}",new_list[s].name)
              .replace("{{price}}","$"+new_list[s].price)
              .replace("{{num}}",new_list[s].num)
              .replace("{{mi}}",s)
              .replace("{{pl}}",s)
              .replace("{{del}}",s)
    
    
   
    var p = parseInt(new_list[s].price)*parseInt(new_list[s].num)
    totalprice = totalprice+p
    
    var cur_totalhtml = 
        totalhtml.replace("{{price}}","$"+totalprice)
    
    // new_list數量>0再顯示
    if(new_list[s].num>0)
      $("#cartlist").append(cur_carthtml); 
      
      
    totalqty+=new_list[s].num
  }
  
  $("#total").append(cur_totalhtml);
  
  if(totalqty>0){
    $(".circle").css("opacity",1);
    $(".qty").text(totalqty);
  }
  else
    $(".circle").css("opacity",0);
  
  
  
  $(".pl").click(function(){
    // var pp = $(".pl").index(this);
    var pp = $(this).attr("data_pl");
    // console.log(pp);
    new_list[pp].num+=1;
    showcartlist();
  })
  
  $(".mi").click(function(){
    // var mm = $(".mi").index(this)
    // 按照原本寫法會產生:
    // 此mi的id與陣列順序不同
    // 因為id是有顯示的清單中順序
    // 但陣列改為new_list後, 不能用splice清除陣列清單
    // (不然cart_list & new_list會比對不到相同產品)
    // 改用數量去判段顯示與否
    // 因此陣列順序是固定但對應的mi不是
    // 解決辦法:
    // 在html塞入data_mi
    // data_mi即為陣列順序
    var mm = $(this).attr("data_mi")
    if(new_list[mm].num<=0)
      new_list.num=0
    else
      new_list[mm].num-=1
    showcartlist();
  })
  
  $(".delete").click(function(){
    // 同上減法寫法
    // 不用splice改用數量=0使此列不顯示
    // var dd = $(".delete").index(this) 
    var dd = $(this).attr("data_del")
    console.log(dd)
    new_list[dd].num=0
    showcartlist();
  })
}



// 顯示頁面提示-----------------------------------------------------------------

function shownotice(text){
  $(".notice").text(text)
  $(".notice").css("transform","translate(-50%,-50%)")
  $(".notice").css("opacity",1)
  
  // 延遲2秒後消失
  // 秒數放在function(){}後!!!
  setTimeout(function(){
    $(".notice").css("transform","")
    $(".notice").css("opacity","")
  },2000)
  
}

// $(".cartbuy").click(function(){
//   if(cart_list.length>=1){
//     shownotice("Order received, have a nice cake!")
//     cart_list.length=0
//     showcartlist();
//   }
//   else
//     shownotice("Haven't added dessert yet")
// })

// 原本(如上)寫法用陣列長度判斷提示文字
// 改成new_list後陣列長度皆>0, 無法用此判斷
// 修改方法:
// 1. 用購物車數量判斷
// 2. 判斷 & 顯示文字後, 用迴圈將new_list數量歸0
//    (等同於原寫法, 陣列長度歸0)
// 3. 將cartqty歸0
// 4. 但cartqty抓出來的為文字,無法寫成 cartqty=0
// 5. 需要寫成 $(".qty").text("0")

$(".cartbuy").click(function(){  
  var cartqty = $(".qty").text()
  if(parseInt(cartqty)>0){
    shownotice("Order received, have a nice cake!")
    $(".qty").text("0")
    for(var cq=0;cq<new_list.length;cq++){
      new_list[cq].num=0
    }

    showcartlist();
  }
  else
    shownotice("Haven't added dessert yet")
  
})