$(()=>{let e={restriction:void 0,filter:void 0,ingredient1:void 0,ingredient2:void 0,ingredient3:void 0};const i=e=>{let i=t(),o=void 0===e.filter?"":`&diet=${e.filter}`,r=void 0===e.restriction?"":`&health=${e.restriction}`,d=`https://api.edamam.com/search?q=${i}&app_id=fd3ea657&app_key=a61ca3c11d3b2ec930779e11cfe06c85${o}${r}&from=0&to=100`;console.log(o),console.log(r),console.log(i),console.log(d),fetch(d,{mode:"cors",redirect:"follow",headers:{"Accept-Encoding":"gzip"}}).then(e=>e.json()).then(e=>{n(e)}).catch(e=>console.log(e))},t=()=>{let i=[],t="";return void 0!==e.ingredient1&&i.push(e.ingredient1),void 0!==e.ingredient2&&i.push(e.ingredient2),void 0!==e.ingredient3&&i.push(e.ingredient3),3===i.length&&(t=`${i[0]}+${i[1]}+${i[2]}`),2===i.length&&(t=`${i[0]}+${i[1]}`),1===i.length&&(t=`${i[0]}`),t},n=e=>{let i=o(e.hits.length);d(e,i)},o=e=>e<=5?0:Math.floor(Math.random()*(e-4)),r=(e,i)=>{d(e,i)},d=(e,i)=>{l();let t=e.hits[i].recipe,n=e.hits.length<=5?e.hits.length:5,o=new Image,d=Math.round(t.calories/t.yield);o.src=t.image,o.onload=$(".image").append(`<img src='${o.src}' class="card-img-top mx-auto" alt="recipe image">`),$(".card-title").text(t.label),$(".group-info .info-1").text(`Servings: ${t.yield}`),$(".group-info .info-2").text(`Cal/Serving: ${d}`),$(".index").text(`${i}/5`),$("a.btn").attr("href",t.url);for(let e=0;e<t.ingredients.length;e++)$(".card-body .ingredients").append(`<li>- ${t.ingredients[e].text}</li>`);$(".btn-prev").one("click",()=>{r(e,i>0?--i:i=n-1)}),$(".btn-next").once("click",()=>{r(e,i<n-1?++i:i=0)})},l=()=>{$("ul.ingredients").empty(),$(".image").empty()};(()=>{const i=$(".door"),t=$(".handle");i.on("click",async function(){Object.keys(e).forEach(i=>e[i]=void 0),$(".fridge").find(".dropdown-menu .show").removeClass("show"),$(".fridge").find("input").val(""),$(".restriction").text("No restriction"),$(".filter").text("No filter"),t.addClass("open");let n=new Promise(e=>setTimeout(()=>e(t.removeClass("open")),300)),o=new Promise(e=>setTimeout(()=>e(),600));await n,await o,i.toggleClass("open")})})(),$("a.dropdown-item").on("click",function(){$(this).parent().prev().text($(this).text())}),$(".fa-times-circle").on("click",function(){$(this).prev().val(""),e.ingredient1=this.previousElementSibling.id.includes("1")?void 0:e.ingredient1,e.ingredient2=this.previousElementSibling.id.includes("2")?void 0:e.ingredient2,e.ingredient3=this.previousElementSibling.id.includes("3")?void 0:e.ingredient3}),$(".search").on("click",()=>{e.restriction="No restriction"===$(".restriction").text()?void 0:$(".restriction").text(),e.filter="No filter"===$(".filter").text()?void 0:$(".filter").text(),e.ingredient1=""===$("#ingredient-1").val()?void 0:$("#ingredient-1").val(),e.ingredient2=""===$("#ingredient-2").val()?void 0:$("#ingredient-2").val(),e.ingredient3=""===$("#ingredient-3").val()?void 0:$("#ingredient-3").val(),i(e)})});
//# sourceMappingURL=app.js.map
