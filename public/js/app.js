$(()=>{let e={restriction:void 0,filter:void 0,ingredient1:void 0,ingredient2:void 0,ingredient3:void 0};const i=()=>{Object.keys(e).forEach(i=>e[i]=void 0),$(".fridge").find(".dropdown-menu .show").removeClass("show"),$(".fridge").find("input").val(""),$(".restriction").text("No restriction"),$(".filter").text("No filter")},t=async()=>{const e=$(".door"),t=$(".handle");i(),t.addClass("open");let n=new Promise(e=>setTimeout(()=>e(t.removeClass("open")),300)),o=new Promise(e=>setTimeout(()=>e(),600));await n,await o,e.toggleClass("open")},n=e=>{let i=o(),t=void 0===e.filter?"":`&diet=${e.filter.toLowerCase()}`,n=void 0===e.restriction?"":`&health=${e.restriction.toLowerCase()}`;fetch(`https://api.edamam.com/search?q=${i}&app_id=fd3ea657&app_key=a61ca3c11d3b2ec930779e11cfe06c85${t}${n}&from=0&to=100`,{mode:"cors",redirect:"follow",headers:{"Accept-Encoding":"gzip"}}).then(e=>e.json()).then(e=>{console.log(e),r(e)}).catch(e=>console.log(e))},o=()=>{let i=[],t="";return void 0!==e.ingredient1&&i.push(e.ingredient1),void 0!==e.ingredient2&&i.push(e.ingredient2),void 0!==e.ingredient3&&i.push(e.ingredient3),3===i.length&&(t=`${i[0]}+${i[1]}+${i[2]}`),2===i.length&&(t=`${i[0]}+${i[1]}`),1===i.length&&(t=`${i[0]}`),t},r=e=>{let i=0+(e.hits.length>5?5:e.hits.length)-1,t=a(e.hits.length);0===e.hits.length?alert("oops, coudnt find anything"):d(e,0,i,t)},a=e=>e<=5?0:Math.floor(Math.random()*(e-4)),l=(e,i,t,n)=>{d(e,i,t,n)},d=(e,i,t,n)=>{c(),console.log(`recipeIndex: ${n}, index: ${i}, maxIndex: ${t}`);let o=e.hits[n+i].recipe,r=new Image,a=Math.round(o.calories/o.yield),d=i+1;r.src=o.image,r.onload=$(".image").append(`<img src='${r.src}' class="card-img-top mx-auto" alt="recipe image">`),$(".card-title").text(o.label),$(".group-info .info-1").text(`Servings: ${o.yield}`),$(".group-info .info-2").text(`Cal/Serving: ${a}`),$(".index").text(`${d}/${e.hits.length>5?5:e.hits.length}`),$("a.btn").attr("href",o.url);for(let e=0;e<o.ingredients.length;e++)$(".card-body .ingredients").append(`<li>- ${o.ingredients[e].text}</li>`);e.hits.length>1&&($(".btn-prev").one("click",()=>{l(e,i>t-4?--i:i=t,t,n)}),$(".btn-next").one("click",()=>{i<t?(d++,l(e,++i,t,n)):(d=1,l(e,i=t-4,t,n))}))},c=()=>{$("ul.ingredients").empty(),$(".image").empty()};$("a.dropdown-item").on("click",function(){$(this).parent().prev().text($(this).text())}),$(".fa-times-circle").on("click",function(){$(this).prev().val(""),e.ingredient1=this.previousElementSibling.id.includes("1")?void 0:e.ingredient1,e.ingredient2=this.previousElementSibling.id.includes("2")?void 0:e.ingredient2,e.ingredient3=this.previousElementSibling.id.includes("3")?void 0:e.ingredient3}),$(".search").on("click",async()=>{e.restriction="No restriction"===$(".restriction").text()?void 0:$(".restriction").text(),e.filter="No filter"===$(".filter").text()?void 0:$(".filter").text(),e.ingredient1=""===$("#ingredient-1").val()?void 0:$("#ingredient-1").val(),e.ingredient2=""===$("#ingredient-2").val()?void 0:$("#ingredient-2").val(),e.ingredient3=""===$("#ingredient-3").val()?void 0:$("#ingredient-3").val(),await n(e),t()}),$(".lucky").on("click",()=>{t(),i();let o=["potato","salad","steak","tuna","salmon","cod","shrimps","rocket","spinach","onion","mushroom","leek","pumpkin","peas","bean","beans","cucumber","zucchini","garlic","broccoli","cauliflower","capers","carrot","beetroot","cabbage","asparagus","avocado","eggplant","rice","oats","buckwheat","black beans","chickpeas","millet","lentil","chicken","beef","turkey","duck","breast","pork","ham","mutton","chops","milk","cream","cheddar","yogurt","cottage","butter","mango","strawberry","orange","lemon","lime","coconut","banana","peach","olive","almonds","sesame","walnuts"],r=o[Math.floor(Math.random()*o.length)];e.ingredient1=r,n(e)}),$(".door").on("click",t)});
//# sourceMappingURL=app.js.map
