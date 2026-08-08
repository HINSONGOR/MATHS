'use strict';

window.onerror = function(msg, src, line){
  const el = document.getElementById('load-msg');
  if(el) el.textContent = '錯誤：' + msg + ' (行' + line + ')';
  return false;
};

/* ════════════════════════════════════════════════
   QUESTION BANK
   ════════════════════════════════════════════════ */
const QB = {

/* ─── 整數運算 ─── */
integer: [
  { id:'int1', text:'計算 48 和 72 的最大公因數（H.C.F.）',
    opts:['12','24','36','48'], ans:1,
    expl:'第一步：分別做質因數分解：<br>48 = 2⁴ × 3<br>72 = 2³ × 3²<br>第二步：兩數共有的質因數，各取最低次冪：2 取 2³，3 取 3¹<br>H.C.F. = 2³ × 3 = <strong class="correct-hl">24</strong>' },
  { id:'int2', text:'計算 9 和 12 的最小公倍數（L.C.M.）',
    opts:['3','18','36','108'], ans:2,
    expl:'第一步：分別做質因數分解：<br>9 = 3²<br>12 = 2² × 3<br>第二步：所有出現過的質因數，各取最高次冪：2 取 2²，3 取 3²<br>L.C.M. = 2² × 3² = 4 × 9 = <strong class="correct-hl">36</strong>' },
  { id:'int3', text:'計算：3 + 5 × 4 − 2 = ?',
    opts:['30','18','21','26'], ans:2,
    expl:'第一步：先做乘法（四則運算中乘除優先於加減）：<br>5 × 4 = 20<br>第二步：由左至右計算加減：<br>3 + 20 − 2 = <strong class="correct-hl">21</strong>' },
  { id:'int4', text:'計算 2⁴ × 3² 的值',
    opts:['72','108','144','216'], ans:2,
    expl:'第一步：分別計算兩個冪：<br>2⁴ = 2×2×2×2 = 16<br>3² = 3×3 = 9<br>第二步：相乘：<br>16 × 9 = <strong class="correct-hl">144</strong>' },
  { id:'int5', text:'下列哪一個數是 60 的因數？',
    opts:['7','8','11','15'], ans:3,
    expl:'步驟①逐個試除60：60÷7=8餘4（✗），60÷8=7餘4（✗），60÷11=5餘5（✗），60÷15=4餘0（✓）；步驟②能整除60的是 <strong class="correct-hl">15</strong>' },
  { id:'int6', text:'兩個數的 H.C.F. 是 6，L.C.M. 是 72，其中一個數是 24，另一個數是？',
    opts:['12','18','36','48'], ans:1,
    expl:'第一步：利用公式「兩數之積 = H.C.F. × L.C.M.」：<br>兩數之積 = 6 × 72 = 432<br>第二步：另一個數 = 432 ÷ 24 = <strong class="correct-hl">18</strong>' },
  { id:'int7', text:'下列哪一個數是質數（素數）？',
    opts:['27','51','57','97'], ans:3,
    expl:'步驟①逐個排除：27=3³（非質數），51=3×17（非質數），57=3×19（非質數）；步驟②97用2、3、5、7試除均不整除 → <strong class="correct-hl">97</strong>是質數' },
  { id:'int8', text:'345 × 9 + 345 = 345 × □，□ 裏應填什麼數？',
    opts:['9','9.5','10','11'], ans:2,
    expl:'第一步：345 出現兩次，可用分配律提出：<br>345 × 9 + 345 × 1 = 345 × (9 + 1)<br>第二步：計算括號內：9 + 1 = <strong class="correct-hl">10</strong>' },
  { id:'int9', text:'2016 ÷ 48 = ?',
    opts:['38','40','42','44'], ans:2,
    expl:'第一步：先估計 48 的倍數接近 2016：<br>48 × 40 = 1920<br>第二步：計算剩餘部分：<br>2016 − 1920 = 96，96 ÷ 48 = 2<br>第三步：相加：40 + 2 = <strong class="correct-hl">42</strong>' },
  { id:'int10', text:'下列哪個算式的答案最大？',
    opts:['(3 + 4) × 5','3 × 4 + 5','3 + 4 × 5','3 × (4 + 5)'], ans:0,
    expl:'步驟①分別計算：(3+4)×5=35，3×4+5=17，3+4×5=23，3×(4+5)=27；步驟②比較：35最大 → <strong class="correct-hl">(3+4)×5</strong>' },
  { id:'int11', text:'計算 H.C.F.(36, 60)',
    opts:['6','12','18','30'], ans:1,
    expl:'第一步：質因數分解：<br>36 = 2² × 3²<br>60 = 2² × 3 × 5<br>第二步：共有的質因數各取最低次冪：2 取 2²，3 取 3¹<br>H.C.F. = 2² × 3 = <strong class="correct-hl">12</strong>' },
  { id:'int12', text:'500 以內，3 的倍數共有多少個？',
    opts:['165','166','167','168'], ans:1,
    expl:'第一步：計算 500 ÷ 3：<br>500 ÷ 3 = 166 餘 2<br>第二步：餘數不算在內，只取商：<br>500 以內共有 <strong class="correct-hl">166</strong> 個 3 的倍數（即 3, 6, 9, …, 498）' },
  { id:'int13', text:'把 180 分解為質因數之積',
    opts:['2 × 3² × 5 × 2','2² × 3² × 5','2² × 3 × 5²','2³ × 3 × 5'], ans:1,
    expl:'第一步：逐步分解 180：<br>180 = 2 × 90 = 2 × 2 × 45 = 2² × 45<br>第二步：繼續分解 45：<br>45 = 9 × 5 = 3² × 5<br>合併結果：180 = <strong class="correct-hl">2² × 3² × 5</strong>' },
  { id:'int14', text:'計算：(15 + 9) ÷ 3 − 2² = ?',
    opts:['2','4','6','8'], ans:1,
    expl:'第一步：先算括號內：<br>15 + 9 = 24<br>第二步：做除法：<br>24 ÷ 3 = 8<br>第三步：計算冪：2² = 4<br>第四步：相減：8 − 4 = <strong class="correct-hl">4</strong>' },
  { id:'int15', text:'三個連續偶數之和是 54，最大的一個是？',
    opts:['16','18','20','22'], ans:2,
    expl:'第一步：設中間的偶數為 n，三數為 n−2、n、n+2<br>第二步：三數之和：(n−2) + n + (n+2) = 3n = 54<br>解得 n = 54 ÷ 3 = 18<br>第三步：最大的一個 = n + 2 = <strong class="correct-hl">20</strong>' },
  { id:'int16', text:'1 至 100 之間，同時是 5 和 6 的公倍數有多少個？',
    opts:['1','2','3','4'], ans:2,
    expl:'第一步：求 5 和 6 的最小公倍數：<br>L.C.M.(5,6) = 30<br>第二步：列出 100 以內 30 的倍數：<br>30, 60, 90<br>共 <strong class="correct-hl">3</strong> 個' },
  { id:'int17', text:'計算：48 × 25 = ?',
    opts:['1100','1150','1200','1250'], ans:2,
    expl:'第一步：利用 25 = 100 ÷ 4 簡化計算：<br>48 × 25 = 48 × 100 ÷ 4<br>第二步：先乘：48 × 100 = 4800<br>第三步：再除：4800 ÷ 4 = <strong class="correct-hl">1200</strong>' },
  { id:'int18', text:'2⁵ − 3² = ?',
    opts:['16','22','23','25'], ans:2,
    expl:'第一步：分別計算冪：<br>2⁵ = 32<br>3² = 9<br>第二步：相減：32 − 9 = <strong class="correct-hl">23</strong>' },
  { id:'int19', text:'某數除以 8 商 15 餘 3，該數是？',
    opts:['120','121','122','123'], ans:3,
    expl:'第一步：利用公式「被除數 = 除數 × 商 + 餘數」：<br>該數 = 8 × 15 + 3<br>第二步：計算：8 × 15 = 120，120 + 3 = <strong class="correct-hl">123</strong>' },
  { id:'int20', text:'H.C.F.(84, 126) = ?',
    opts:['14','21','28','42'], ans:3,
    expl:'第一步：質因數分解：<br>84 = 2² × 3 × 7<br>126 = 2 × 3² × 7<br>第二步：共有的質因數各取最低次冪：2 取 2¹，3 取 3¹，7 取 7¹<br>H.C.F. = 2 × 3 × 7 = <strong class="correct-hl">42</strong>' },
],

/* ─── 分數 ─── */
fraction: [
  { id:'fr1', text:'計算：<sup>3</sup>/<sub>4</sub> + <sup>5</sup>/<sub>6</sub> = ?',
    opts:['1<sup>7</sup>/<sub>12</sub>','1<sup>1</sup>/<sub>2</sub>','1<sup>5</sup>/<sub>12</sub>','1<sup>2</sup>/<sub>3</sub>'], ans:0,
    expl:'第一步：分母通分為 12：<br><sup>3</sup>/<sub>4</sub> = <sup>9</sup>/<sub>12</sub>，<sup>5</sup>/<sub>6</sub> = <sup>10</sup>/<sub>12</sub><br>第二步：分子相加：<br><sup>9</sup>/<sub>12</sub> + <sup>10</sup>/<sub>12</sub> = <sup>19</sup>/<sub>12</sub><br>第三步：化為帶分數：<sup>19</sup>/<sub>12</sub> = <strong class="correct-hl">1<sup>7</sup>/<sub>12</sub></strong>' },
  { id:'fr2', text:'計算：2<sup>1</sup>/<sub>3</sub> − 1<sup>3</sup>/<sub>4</sub> = ?',
    opts:['<sup>7</sup>/<sub>12</sub>','<sup>5</sup>/<sub>12</sub>','<sup>1</sup>/<sub>2</sub>','<sup>11</sup>/<sub>12</sub>'], ans:0,
    expl:'第一步：化為假分數：<br>2<sup>1</sup>/<sub>3</sub> = <sup>7</sup>/<sub>3</sub>，1<sup>3</sup>/<sub>4</sub> = <sup>7</sup>/<sub>4</sub><br>第二步：通分為 12：<br><sup>7</sup>/<sub>3</sub> = <sup>28</sup>/<sub>12</sub>，<sup>7</sup>/<sub>4</sub> = <sup>21</sup>/<sub>12</sub><br>第三步：相減：28 − 21 = 7<br>差 = <strong class="correct-hl"><sup>7</sup>/<sub>12</sub></strong>' },
  { id:'fr3', text:'計算：<sup>3</sup>/<sub>5</sub> × <sup>5</sup>/<sub>6</sub> = ?',
    opts:['<sup>1</sup>/<sub>2</sub>','<sup>3</sup>/<sub>4</sub>','<sup>2</sup>/<sub>5</sub>','<sup>1</sup>/<sub>3</sub>'], ans:0,
    expl:'第一步：分子相乘、分母相乘：<br>3 × 5 = 15，5 × 6 = 30<br><sup>15</sup>/<sub>30</sub><br>第二步：化簡（同除 15）：<br><sup>15</sup>/<sub>30</sub> = <strong class="correct-hl"><sup>1</sup>/<sub>2</sub></strong>' },
  { id:'fr4', text:'計算：<sup>5</sup>/<sub>8</sub> ÷ <sup>5</sup>/<sub>4</sub> = ?',
    opts:['<sup>1</sup>/<sub>2</sub>','<sup>2</sup>/<sub>5</sub>','<sup>25</sup>/<sub>32</sub>','<sup>4</sup>/<sub>5</sub>'], ans:0,
    expl:'第一步：除以分數＝乘以其倒數：<br><sup>5</sup>/<sub>8</sub> ÷ <sup>5</sup>/<sub>4</sub> = <sup>5</sup>/<sub>8</sub> × <sup>4</sup>/<sub>5</sub><br>第二步：分子分母相乘：<br><sup>20</sup>/<sub>40</sub><br>第三步：化簡：<sup>20</sup>/<sub>40</sub> = <strong class="correct-hl"><sup>1</sup>/<sub>2</sub></strong>' },
  { id:'fr5', text:'化簡分數 <sup>24</sup>/<sub>36</sub>',
    opts:['<sup>1</sup>/<sub>2</sub>','<sup>2</sup>/<sub>3</sub>','<sup>3</sup>/<sub>4</sub>','<sup>4</sup>/<sub>6</sub>'], ans:1,
    expl:'第一步：求 24 和 36 的 H.C.F.：<br>24 = 2³×3，36 = 2²×3²，H.C.F. = 2²×3 = 12<br>第二步：分子分母同除 12：<br><sup>24÷12</sup>/<sub>36÷12</sub> = <strong class="correct-hl"><sup>2</sup>/<sub>3</sub></strong>' },
  { id:'fr6', text:'把 3<sup>2</sup>/<sub>5</sub> 化成假分數',
    opts:['<sup>15</sup>/<sub>5</sub>','<sup>16</sup>/<sub>5</sub>','<sup>17</sup>/<sub>5</sub>','<sup>18</sup>/<sub>5</sub>'], ans:2,
    expl:'第一步：整數部分乘分母，加分子：<br>3 × 5 + 2 = 17<br>第二步：分母不變：<br>3<sup>2</sup>/<sub>5</sub> = <strong class="correct-hl"><sup>17</sup>/<sub>5</sub></strong>' },
  { id:'fr7', text:'270 的 <sup>2</sup>/<sub>3</sub> 是多少？',
    opts:['135','160','180','200'], ans:2,
    expl:'第一步：先除以分母：<br>270 ÷ 3 = 90<br>第二步：再乘分子：<br>90 × 2 = <strong class="correct-hl">180</strong>' },
  { id:'fr8', text:'<sup>3</sup>/<sub>4</sub> ÷ <sup>1</sup>/<sub>8</sub> = ?',
    opts:['3','6','<sup>3</sup>/<sub>32</sub>','<sup>3</sup>/<sub>2</sub>'], ans:1,
    expl:'第一步：除以分數＝乘以其倒數：<br><sup>3</sup>/<sub>4</sub> ÷ <sup>1</sup>/<sub>8</sub> = <sup>3</sup>/<sub>4</sub> × 8<br>第二步：計算：<br>3 × 8 ÷ 4 = 24 ÷ 4 = <strong class="correct-hl">6</strong>' },
  { id:'fr9', text:'哪個分數較大：<sup>7</sup>/<sub>8</sub> 還是 <sup>11</sup>/<sub>13</sub>？',
    opts:['<sup>7</sup>/<sub>8</sub> 較大','<sup>11</sup>/<sub>13</sub> 較大','兩者相等','無法比較'], ans:0,
    expl:'第一步：分別化為小數方便比較：<br><sup>7</sup>/<sub>8</sub> = 7÷8 = 0.875<br><sup>11</sup>/<sub>13</sub> = 11÷13 ≈ 0.846<br>第二步：比較：0.875 > 0.846<br>所以 <strong class="correct-hl"><sup>7</sup>/<sub>8</sub> 較大</strong>' },
  { id:'fr10', text:'1<sup>1</sup>/<sub>2</sub> × 2<sup>2</sup>/<sub>3</sub> = ?',
    opts:['3','4','3<sup>2</sup>/<sub>3</sub>','4<sup>2</sup>/<sub>3</sub>'], ans:1,
    expl:'第一步：化為假分數：<br>1<sup>1</sup>/<sub>2</sub> = <sup>3</sup>/<sub>2</sub>，2<sup>2</sup>/<sub>3</sub> = <sup>8</sup>/<sub>3</sub><br>第二步：分子分母相乘：<br><sup>3</sup>/<sub>2</sub> × <sup>8</sup>/<sub>3</sub> = <sup>24</sup>/<sub>6</sub><br>第三步：化簡：24 ÷ 6 = <strong class="correct-hl">4</strong>' },
  { id:'fr11', text:'計算：<sup>3</sup>/<sub>4</sub> + <sup>1</sup>/<sub>6</sub> − <sup>1</sup>/<sub>3</sub> = ?',
    opts:['<sup>7</sup>/<sub>12</sub>','<sup>5</sup>/<sub>12</sub>','<sup>11</sup>/<sub>12</sub>','<sup>1</sup>/<sub>4</sub>'], ans:0,
    expl:'第一步：分母通分為 12：<br><sup>3</sup>/<sub>4</sub> = <sup>9</sup>/<sub>12</sub>，<sup>1</sup>/<sub>6</sub> = <sup>2</sup>/<sub>12</sub>，<sup>1</sup>/<sub>3</sub> = <sup>4</sup>/<sub>12</sub><br>第二步：分子相加減：<br>9 + 2 − 4 = 7<br>結果 = <strong class="correct-hl"><sup>7</sup>/<sub>12</sub></strong>' },
  { id:'fr12', text:'計算：2 ÷ <sup>2</sup>/<sub>3</sub> × <sup>1</sup>/<sub>2</sub> = ?',
    opts:['<sup>2</sup>/<sub>3</sub>','<sup>3</sup>/<sub>2</sub>','1','<sup>4</sup>/<sub>3</sub>'], ans:1,
    expl:'第一步：由左至右，先算除法：<br>2 ÷ <sup>2</sup>/<sub>3</sub> = 2 × <sup>3</sup>/<sub>2</sub> = 3<br>第二步：再乘：<br>3 × <sup>1</sup>/<sub>2</sub> = <strong class="correct-hl"><sup>3</sup>/<sub>2</sub></strong>' },
  { id:'fr13', text:'計算：(<sup>1</sup>/<sub>2</sub> + <sup>1</sup>/<sub>3</sub>) × 6 = ?',
    opts:['3','4','5','6'], ans:2,
    expl:'第一步：先算括號內（通分為 6）：<br><sup>1</sup>/<sub>2</sub> = <sup>3</sup>/<sub>6</sub>，<sup>1</sup>/<sub>3</sub> = <sup>2</sup>/<sub>6</sub>，相加 = <sup>5</sup>/<sub>6</sub><br>第二步：再乘 6：<br><sup>5</sup>/<sub>6</sub> × 6 = <strong class="correct-hl">5</strong>' },
  { id:'fr14', text:'計算：1<sup>1</sup>/<sub>4</sub> ÷ 2<sup>1</sup>/<sub>2</sub> = ?',
    opts:['<sup>1</sup>/<sub>2</sub>','<sup>2</sup>/<sub>5</sub>','<sup>3</sup>/<sub>4</sub>','<sup>5</sup>/<sub>8</sub>'], ans:0,
    expl:'第一步：化為假分數：<br>1<sup>1</sup>/<sub>4</sub> = <sup>5</sup>/<sub>4</sub>，2<sup>1</sup>/<sub>2</sub> = <sup>5</sup>/<sub>2</sub><br>第二步：除以分數＝乘以其倒數：<br><sup>5</sup>/<sub>4</sub> × <sup>2</sup>/<sub>5</sub> = <sup>10</sup>/<sub>20</sub><br>第三步：化簡：<sup>10</sup>/<sub>20</sub> = <strong class="correct-hl"><sup>1</sup>/<sub>2</sub></strong>' },
  { id:'fr15', text:'全班 40 人，其中 <sup>2</sup>/<sub>5</sub> 戴眼鏡，戴眼鏡的有多少人？',
    opts:['8','12','16','20'], ans:2,
    expl:'第一步：先除以分母：<br>40 ÷ 5 = 8<br>第二步：再乘分子：<br>8 × 2 = <strong class="correct-hl">16</strong> 人' },
  { id:'fr16', text:'計算：<sup>7</sup>/<sub>8</sub> × 4 − <sup>1</sup>/<sub>2</sub> = ?',
    opts:['2','3','3<sup>1</sup>/<sub>2</sub>','3<sup>3</sup>/<sub>4</sub>'], ans:1,
    expl:'第一步：先做乘法：<br><sup>7</sup>/<sub>8</sub> × 4 = <sup>28</sup>/<sub>8</sub> = <sup>7</sup>/<sub>2</sub><br>第二步：再做減法（通分為 2）：<br><sup>7</sup>/<sub>2</sub> − <sup>1</sup>/<sub>2</sub> = <sup>6</sup>/<sub>2</sub> = <strong class="correct-hl">3</strong>' },
  { id:'fr17', text:'一條繩長 4<sup>1</sup>/<sub>2</sub> m，剪去 1<sup>3</sup>/<sub>4</sub> m，剩多少米？',
    opts:['2<sup>1</sup>/<sub>4</sub> m','2<sup>3</sup>/<sub>4</sub> m','3<sup>1</sup>/<sub>4</sub> m','3<sup>3</sup>/<sub>4</sub> m'], ans:1,
    expl:'第一步：化為假分數：<br>4<sup>1</sup>/<sub>2</sub> = <sup>9</sup>/<sub>2</sub>，1<sup>3</sup>/<sub>4</sub> = <sup>7</sup>/<sub>4</sub><br>第二步：通分為 4：<br><sup>9</sup>/<sub>2</sub> = <sup>18</sup>/<sub>4</sub><br>第三步：相減：<br><sup>18</sup>/<sub>4</sub> − <sup>7</sup>/<sub>4</sub> = <sup>11</sup>/<sub>4</sub> = <strong class="correct-hl">2<sup>3</sup>/<sub>4</sub></strong> m' },
  { id:'fr18', text:'下列哪個分數最大？',
    opts:['<sup>5</sup>/<sub>6</sub>','<sup>7</sup>/<sub>9</sub>','<sup>3</sup>/<sub>4</sub>','<sup>11</sup>/<sub>15</sub>'], ans:0,
    expl:'第一步：求 6、9、4、15 的公分母：180<br>第二步：分別通分：<br><sup>5</sup>/<sub>6</sub>=<sup>150</sup>/<sub>180</sub>，<sup>7</sup>/<sub>9</sub>=<sup>140</sup>/<sub>180</sub>，<sup>3</sup>/<sub>4</sub>=<sup>135</sup>/<sub>180</sub>，<sup>11</sup>/<sub>15</sub>=<sup>132</sup>/<sub>180</sub><br>第三步：比較分子，150 最大<br>所以 <strong class="correct-hl"><sup>5</sup>/<sub>6</sub></strong> 最大' },
],

/* ─── 小數 ─── */
decimal: [
  { id:'dec1', text:'計算：4.5 × 0.6 = ?',
    opts:['2.7','27','0.27','2.67'], ans:0,
    expl:'第一步：暫時忽略小數點，計算 45 × 6 = 270<br>第二步：數返兩個原數共有多少位小數：4.5 有 1 位，0.6 有 1 位，共 2 位<br>第三步：由右至左數 2 位放回小數點：<strong class="correct-hl">2.7</strong>' },
  { id:'dec2', text:'計算：7.56 ÷ 0.9 = ?',
    opts:['8','8.4','84','0.84'], ans:1,
    expl:'第一步：將除數化為整數，兩數同乘 10：<br>7.56 ÷ 0.9 = 75.6 ÷ 9<br>第二步：計算：75.6 ÷ 9 = <strong class="correct-hl">8.4</strong>' },
  { id:'dec3', text:'把 6.385 四捨五入至兩個小數位',
    opts:['6.38','6.39','6.40','6.4'], ans:1,
    expl:'第一步：看第三位小數（決定是否進位）：5<br>第二步：5 要進位，令第二位小數 8 變成 9<br>6.385 ≈ <strong class="correct-hl">6.39</strong>' },
  { id:'dec4', text:'3.2 + 0.85 − 1.63 = ?',
    opts:['2.42','2.32','1.42','3.42'], ans:0,
    expl:'第一步：先做加法：<br>3.2 + 0.85 = 4.05<br>第二步：再做減法：<br>4.05 − 1.63 = <strong class="correct-hl">2.42</strong>' },
  { id:'dec5', text:'<sup>3</sup>/<sub>8</sub> 化成小數是？',
    opts:['0.35','0.38','0.375','0.625'], ans:2,
    expl:'第一步：分子除以分母，用長除法：<br>30 ÷ 8 = 3 餘 6<br>60 ÷ 8 = 7 餘 4<br>40 ÷ 8 = 5 餘 0<br>結果：3 ÷ 8 = <strong class="correct-hl">0.375</strong>' },
  { id:'dec6', text:'0.6 化成最簡分數是？',
    opts:['<sup>6</sup>/<sub>10</sub>','<sup>3</sup>/<sub>5</sub>','<sup>2</sup>/<sub>3</sub>','<sup>1</sup>/<sub>6</sub>'], ans:1,
    expl:'第一步：先寫成分數：<br>0.6 = <sup>6</sup>/<sub>10</sub><br>第二步：求 H.C.F.(6,10) = 2，分子分母同除 2：<br><sup>6÷2</sup>/<sub>10÷2</sub> = <strong class="correct-hl"><sup>3</sup>/<sub>5</sub></strong>' },
  { id:'dec7', text:'1.4 × 1.4 = ?',
    opts:['1.6','1.86','1.96','2.8'], ans:2,
    expl:'第一步：忽略小數點，計算 14 × 14 = 196<br>第二步：數小數位：1.4 有 1 位，1.4 有 1 位，共 2 位<br>第三步：196 放回 2 位小數：<strong class="correct-hl">1.96</strong>' },
  { id:'dec8', text:'0.028 ÷ 0.007 = ?',
    opts:['0.04','0.4','4','40'], ans:2,
    expl:'第一步：兩數同乘 1000，化為整數：<br>0.028 ÷ 0.007 = 28 ÷ 7<br>第二步：計算：28 ÷ 7 = <strong class="correct-hl">4</strong>' },
  { id:'dec9', text:'下列哪個數最大？',
    opts:['0.305','0.35','0.3','0.053'], ans:1,
    expl:'第一步：統一補足小數位方便比較：<br>0.305、0.350、0.300、0.053<br>第二步：先比十分位：3、3、3、0 → 0.053 最小<br>再比百分位：0、5、0 → <strong class="correct-hl">0.35</strong> 最大' },
  { id:'dec10', text:'(2.5)² = ?',
    opts:['5','5.25','6.25','625'], ans:2,
    expl:'第一步：忽略小數點，計算 25 × 25 = 625<br>第二步：數小數位：2.5 有 1 位，2.5 有 1 位，共 2 位<br>第三步：625 放回 2 位小數：<strong class="correct-hl">6.25</strong>' },
  { id:'dec11', text:'計算：6.3 × 1.5 = ?',
    opts:['9.05','9.45','9.55','9.75'], ans:1,
    expl:'第一步：忽略小數點，計算 63 × 15 = 945<br>第二步：數小數位：6.3 有 1 位，1.5 有 1 位，共 2 位<br>第三步：945 放回 2 位小數：<strong class="correct-hl">9.45</strong>' },
  { id:'dec12', text:'把 0.125 化成最簡分數',
    opts:['<sup>1</sup>/<sub>4</sub>','<sup>1</sup>/<sub>8</sub>','<sup>5</sup>/<sub>40</sub>','<sup>3</sup>/<sub>24</sub>'], ans:1,
    expl:'第一步：先寫成分數：<br>0.125 = <sup>125</sup>/<sub>1000</sub><br>第二步：求 H.C.F.(125,1000) = 125，同除 125：<br><sup>125÷125</sup>/<sub>1000÷125</sub> = <strong class="correct-hl"><sup>1</sup>/<sub>8</sub></strong>' },
  { id:'dec13', text:'4.82 四捨五入至最接近的整數是？',
    opts:['4','5','4.8','4.9'], ans:1,
    expl:'第一步：看十分位（決定是否進位）：8<br>第二步：8 ≥ 5 要進位，個位 4 變成 5<br>4.82 ≈ <strong class="correct-hl">5</strong>' },
  { id:'dec14', text:'計算：12.6 ÷ 0.04 = ?',
    opts:['31.5','315','3.15','3150'], ans:1,
    expl:'第一步：兩數同乘 100，化為整數：<br>12.6 ÷ 0.04 = 1260 ÷ 4<br>第二步：計算：1260 ÷ 4 = <strong class="correct-hl">315</strong>' },
  { id:'dec15', text:'計算：0.3 × 0.3 × 0.3 = ?',
    opts:['0.009','0.027','0.09','0.27'], ans:1,
    expl:'第一步：忽略小數點，計算 3 × 3 × 3 = 27<br>第二步：數小數位：三個 0.3 各有 1 位，共 3 位<br>第三步：27 放回 3 位小數：<strong class="correct-hl">0.027</strong>' },
  { id:'dec16', text:'下列哪個算式得出最大值？',
    opts:['0.9 × 0.9','0.9 + 0.9','0.9 ÷ 0.9','0.9 − 0.9'], ans:1,
    expl:'步驟①分別計算：0.9×0.9=0.81，0.9+0.9=1.8，0.9÷0.9=1，0.9−0.9=0；步驟②比較：1.8最大 → <strong class="correct-hl">0.9+0.9</strong>' },
  { id:'dec17', text:'計算：0.5 + 0.05 + 0.005 = ?',
    opts:['0.0555','0.555','0.5055','0.5505'], ans:1,
    expl:'第一步：統一補足三位小數：<br>0.500 + 0.050 + 0.005<br>第二步：直式相加：<br>= <strong class="correct-hl">0.555</strong>' },
  { id:'dec18', text:'把 <sup>7</sup>/<sub>8</sub> 化成小數',
    opts:['0.75','0.825','0.875','0.9'], ans:2,
    expl:'第一步：分子除以分母，用長除法：<br>70 ÷ 8 = 8 餘 6<br>60 ÷ 8 = 7 餘 4<br>40 ÷ 8 = 5 餘 0<br>結果：7 ÷ 8 = <strong class="correct-hl">0.875</strong>' },
],

/* ─── 百分率 ─── */
percent: [
  { id:'pct1', text:'求 350 的 40%',
    opts:['120','140','160','180'], ans:1,
    expl:'第一步：把百分數化為小數：40% = 0.4<br>第二步：相乘：<br>350 × 0.4 = <strong class="correct-hl">140</strong>' },
  { id:'pct2', text:'36 是 120 的百分之幾？',
    opts:['20%','25%','30%','36%'], ans:2,
    expl:'第一步：求兩數之比：<br>36 ÷ 120 = 0.3<br>第二步：化為百分數（乘 100%）：<br>0.3 × 100% = <strong class="correct-hl">30%</strong>' },
  { id:'pct3', text:'一件外套原價 $400，享75折優惠，售價是？',
    opts:['$280','$300','$320','$340'], ans:1,
    expl:'第一步：75 折即原價的 75%<br>第二步：售價 = 原價 × 75%：<br>$400 × 0.75 = <strong class="correct-hl">$300</strong>' },
  { id:'pct4', text:'某商品加價10%後售 $275，原價是？',
    opts:['$240','$245','$250','$260'], ans:2,
    expl:'第一步：設原價為 x，加價 10% 後是原價的 110%：<br>x × 1.1 = 275<br>第二步：兩邊除以 1.1：<br>x = 275 ÷ 1.1 = <strong class="correct-hl">$250</strong>' },
  { id:'pct5', text:'以 $80 購入，以 $100 賣出，利潤百分率是？',
    opts:['20%','25%','30%','40%'], ans:1,
    expl:'第一步：求利潤：<br>利潤 = 100 − 80 = $20<br>第二步：利潤 ÷ 成本 × 100%：<br>20 ÷ 80 × 100% = <strong class="correct-hl">25%</strong>' },
  { id:'pct6', text:'$3000 存入銀行，年利率 4%，2年的利息是？',
    opts:['$120','$240','$480','$600'], ans:1,
    expl:'第一步：套用單利公式 I = P × R × T（本金×利率×年數）：<br>I = 3000 × 4% × 2<br>第二步：計算：3000 × 0.04 × 2 = <strong class="correct-hl">$240</strong>' },
  { id:'pct7', text:'某數的75% 等於 360，求該數',
    opts:['420','450','480','500'], ans:2,
    expl:'第一步：設該數為 x：<br>0.75x = 360<br>第二步：兩邊除以 0.75：<br>x = 360 ÷ 0.75 = <strong class="correct-hl">480</strong>' },
  { id:'pct8', text:'一件衣服打八折後售 $160，原價是？',
    opts:['$180','$192','$200','$210'], ans:2,
    expl:'第一步：八折即原價的 80%，設原價為 x：<br>0.8x = 160<br>第二步：兩邊除以 0.8：<br>x = 160 ÷ 0.8 = <strong class="correct-hl">$200</strong>' },
  { id:'pct9', text:'150 減少 40% 後等於？',
    opts:['60','80','90','110'], ans:2,
    expl:'第一步：減少 40% 後餘下 (100% − 40%) = 60%<br>第二步：150 × 60%：<br>150 × 0.6 = <strong class="correct-hl">90</strong>' },
  { id:'pct10', text:'從 60 增加到 75，增加了百分之幾？',
    opts:['15%','20%','25%','30%'], ans:2,
    expl:'第一步：求增加量：<br>75 − 60 = 15<br>第二步：增加量 ÷ 原數 × 100%：<br>15 ÷ 60 × 100% = <strong class="correct-hl">25%</strong>' },
  { id:'pct11', text:'某班合格率是 80%，共 40 人，不合格有多少人？',
    opts:['6','7','8','9'], ans:2,
    expl:'第一步：求合格人數：<br>40 × 80% = 32 人<br>第二步：不合格人數 = 全班 − 合格：<br>40 − 32 = <strong class="correct-hl">8</strong> 人' },
  { id:'pct12', text:'電費 $800，加收 5% 附加費，實付多少？',
    opts:['$820','$840','$860','$880'], ans:1,
    expl:'第一步：加收 5% 即實付原數的 105%：<br>$800 × 1.05<br>第二步：計算：= <strong class="correct-hl">$840</strong>' },
  { id:'pct13', text:'超市把物品降價 30%，降價後售 $105，原價是？',
    opts:['$140','$150','$160','$175'], ans:1,
    expl:'第一步：降價 30% 後餘下 70%：<br>原價 × 0.7 = 105<br>第二步：兩邊除以 0.7：<br>原價 = 105 ÷ 0.7 = <strong class="correct-hl">$150</strong>' },
  { id:'pct14', text:'$2000 存款，年利率 3%，存 3 年共獲利息多少？',
    opts:['$120','$180','$360','$540'], ans:1,
    expl:'第一步：套用單利公式 I = P × R × T：<br>I = 2000 × 3% × 3<br>第二步：計算：2000 × 0.03 × 3 = <strong class="correct-hl">$180</strong>' },
  { id:'pct15', text:'以 $300 買入，以 $240 賣出，虧損百分之幾？',
    opts:['15%','20%','25%','30%'], ans:1,
    expl:'第一步：求虧損金額：<br>300 − 240 = $60<br>第二步：虧損 ÷ 成本 × 100%：<br>60 ÷ 300 × 100% = <strong class="correct-hl">20%</strong>' },
  { id:'pct16', text:'一件衫先加價 20%，再打八折，最終售價是原價的百分之幾？',
    opts:['96%','100%','104%','80%'], ans:0,
    expl:'第一步：加價 20% 即乘 1.2<br>第二步：打八折即再乘 0.8<br>第三步：兩個倍率相乘：<br>1.2 × 0.8 = <strong class="correct-hl">0.96</strong>，即 96%（比原價低 4%！）' },
  { id:'pct17', text:'一個數增加 50% 後等於 120，原數是？',
    opts:['70','80','90','100'], ans:1,
    expl:'第一步：設原數為 x，增加 50% 後是 150%：<br>x × 1.5 = 120<br>第二步：兩邊除以 1.5：<br>x = 120 ÷ 1.5 = <strong class="correct-hl">80</strong>' },
  { id:'pct18', text:'原價 $450，售價 $360，折扣是幾折？',
    opts:['七折','七五折','八折','八五折'], ans:2,
    expl:'第一步：求售價佔原價的百分比：<br>360 ÷ 450 × 100% = 80%<br>第二步：80% 即為<strong class="correct-hl">八折</strong>' },
  { id:'pct19', text:'某商品加價 20% 後售 $180，原價是？',
    opts:['$140','$145','$150','$160'], ans:2,
    expl:'第一步：設原價為 x，加價 20% 後是 120%：<br>x × 1.2 = 180<br>第二步：兩邊除以 1.2：<br>x = 180 ÷ 1.2 = <strong class="correct-hl">$150</strong>' },
],

/* ─── 百分數化分數 ─── */
pct_pfrac: [
  { id:'ppf1', text:'50% 化成最簡分數是？',
    opts:['<sup>1</sup>/<sub>2</sub>','<sup>5</sup>/<sub>10</sub>','<sup>2</sup>/<sub>5</sub>','<sup>1</sup>/<sub>4</sub>'], ans:0,
    expl:'步驟①：50% = <sup>50</sup>/<sub>100</sub>；步驟②：H.C.F.(50,100)=50，兩數同除 50；步驟③：= <strong class="correct-hl"><sup>1</sup>/<sub>2</sub></strong>' },
  { id:'ppf2', text:'25% 化成最簡分數是？',
    opts:['<sup>1</sup>/<sub>5</sub>','<sup>1</sup>/<sub>4</sub>','<sup>2</sup>/<sub>5</sub>','<sup>3</sup>/<sub>4</sub>'], ans:1,
    expl:'步驟①：25% = <sup>25</sup>/<sub>100</sub>；步驟②：H.C.F.(25,100)=25，兩數同除 25；步驟③：= <strong class="correct-hl"><sup>1</sup>/<sub>4</sub></strong>' },
  { id:'ppf3', text:'75% 化成最簡分數是？',
    opts:['<sup>7</sup>/<sub>10</sub>','<sup>1</sup>/<sub>4</sub>','<sup>3</sup>/<sub>4</sub>','<sup>3</sup>/<sub>5</sub>'], ans:2,
    expl:'步驟①：75% = <sup>75</sup>/<sub>100</sub>；步驟②：H.C.F.(75,100)=25，兩數同除 25；步驟③：= <strong class="correct-hl"><sup>3</sup>/<sub>4</sub></strong>' },
  { id:'ppf4', text:'20% 化成最簡分數是？',
    opts:['<sup>1</sup>/<sub>5</sub>','<sup>2</sup>/<sub>10</sub>','<sup>1</sup>/<sub>4</sub>','<sup>2</sup>/<sub>5</sub>'], ans:0,
    expl:'步驟①：20% = <sup>20</sup>/<sub>100</sub>；步驟②：H.C.F.(20,100)=20，兩數同除 20；步驟③：= <strong class="correct-hl"><sup>1</sup>/<sub>5</sub></strong>' },
  { id:'ppf5', text:'40% 化成最簡分數是？',
    opts:['<sup>4</sup>/<sub>5</sub>','<sup>2</sup>/<sub>5</sub>','<sup>1</sup>/<sub>4</sub>','<sup>3</sup>/<sub>5</sub>'], ans:1,
    expl:'步驟①：40% = <sup>40</sup>/<sub>100</sub>；步驟②：H.C.F.(40,100)=20，兩數同除 20；步驟③：= <strong class="correct-hl"><sup>2</sup>/<sub>5</sub></strong>' },
  { id:'ppf6', text:'60% 化成最簡分數是？',
    opts:['<sup>3</sup>/<sub>5</sub>','<sup>6</sup>/<sub>10</sub>','<sup>2</sup>/<sub>3</sub>','<sup>1</sup>/<sub>2</sub>'], ans:0,
    expl:'步驟①：60% = <sup>60</sup>/<sub>100</sub>；步驟②：H.C.F.(60,100)=20，兩數同除 20；步驟③：= <strong class="correct-hl"><sup>3</sup>/<sub>5</sub></strong>' },
  { id:'ppf7', text:'80% 化成最簡分數是？',
    opts:['<sup>4</sup>/<sub>5</sub>','<sup>8</sup>/<sub>10</sub>','<sup>3</sup>/<sub>5</sub>','<sup>3</sup>/<sub>4</sub>'], ans:0,
    expl:'步驟①：80% = <sup>80</sup>/<sub>100</sub>；步驟②：H.C.F.(80,100)=20，兩數同除 20；步驟③：= <strong class="correct-hl"><sup>4</sup>/<sub>5</sub></strong>' },
  { id:'ppf8', text:'30% 化成最簡分數是？',
    opts:['<sup>3</sup>/<sub>5</sub>','<sup>1</sup>/<sub>3</sub>','<sup>3</sup>/<sub>10</sub>','<sup>1</sup>/<sub>5</sub>'], ans:2,
    expl:'步驟①：30% = <sup>30</sup>/<sub>100</sub>；步驟②：H.C.F.(30,100)=10，兩數同除 10；步驟③：= <strong class="correct-hl"><sup>3</sup>/<sub>10</sub></strong>' },
  { id:'ppf9', text:'10% 化成最簡分數是？',
    opts:['<sup>1</sup>/<sub>5</sub>','<sup>1</sup>/<sub>10</sub>','<sup>1</sup>/<sub>100</sub>','<sup>10</sup>/<sub>100</sub>'], ans:1,
    expl:'步驟①：10% = <sup>10</sup>/<sub>100</sub>；步驟②：H.C.F.(10,100)=10，兩數同除 10；步驟③：= <strong class="correct-hl"><sup>1</sup>/<sub>10</sub></strong>' },
  { id:'ppf10', text:'5% 化成最簡分數是？',
    opts:['<sup>1</sup>/<sub>10</sub>','<sup>1</sup>/<sub>20</sub>','<sup>5</sup>/<sub>100</sub>','<sup>1</sup>/<sub>5</sub>'], ans:1,
    expl:'步驟①：5% = <sup>5</sup>/<sub>100</sub>；步驟②：H.C.F.(5,100)=5，兩數同除 5；步驟③：= <strong class="correct-hl"><sup>1</sup>/<sub>20</sub></strong>' },
  { id:'ppf11', text:'70% 化成最簡分數是？',
    opts:['<sup>7</sup>/<sub>10</sub>','<sup>7</sup>/<sub>100</sub>','<sup>3</sup>/<sub>5</sub>','<sup>2</sup>/<sub>3</sub>'], ans:0,
    expl:'步驟①：70% = <sup>70</sup>/<sub>100</sub>；步驟②：H.C.F.(70,100)=10，兩數同除 10；步驟③：= <strong class="correct-hl"><sup>7</sup>/<sub>10</sub></strong>' },
  { id:'ppf12', text:'15% 化成最簡分數是？',
    opts:['<sup>3</sup>/<sub>20</sub>','<sup>1</sup>/<sub>5</sub>','<sup>3</sup>/<sub>10</sub>','<sup>15</sup>/<sub>100</sub>'], ans:0,
    expl:'步驟①：15% = <sup>15</sup>/<sub>100</sub>；步驟②：H.C.F.(15,100)=5，兩數同除 5；步驟③：= <strong class="correct-hl"><sup>3</sup>/<sub>20</sub></strong>' },
],

/* ─── 分數化百份數 ─── */
pct_fracp: [
  { id:'pfp1', text:'<sup>1</sup>/<sub>2</sub> 化成百分數是？',
    opts:['25%','50%','75%','100%'], ans:1,
    expl:'步驟①：<sup>1</sup>/<sub>2</sub> = 1 ÷ 2 = 0.5；步驟②：乘以 100%：0.5 × 100% = <strong class="correct-hl">50%</strong>' },
  { id:'pfp2', text:'<sup>1</sup>/<sub>4</sub> 化成百分數是？',
    opts:['14%','20%','25%','40%'], ans:2,
    expl:'步驟①：<sup>1</sup>/<sub>4</sub> = 1 ÷ 4 = 0.25；步驟②：乘以 100%：0.25 × 100% = <strong class="correct-hl">25%</strong>' },
  { id:'pfp3', text:'<sup>3</sup>/<sub>4</sub> 化成百分數是？',
    opts:['34%','60%','70%','75%'], ans:3,
    expl:'步驟①：<sup>3</sup>/<sub>4</sub> = 3 ÷ 4 = 0.75；步驟②：乘以 100%：0.75 × 100% = <strong class="correct-hl">75%</strong>' },
  { id:'pfp4', text:'<sup>1</sup>/<sub>5</sub> 化成百分數是？',
    opts:['10%','15%','20%','25%'], ans:2,
    expl:'步驟①：<sup>1</sup>/<sub>5</sub> = 1 ÷ 5 = 0.2；步驟②：乘以 100%：0.2 × 100% = <strong class="correct-hl">20%</strong>' },
  { id:'pfp5', text:'<sup>2</sup>/<sub>5</sub> 化成百分數是？',
    opts:['25%','40%','45%','50%'], ans:1,
    expl:'步驟①：<sup>2</sup>/<sub>5</sub> = 2 ÷ 5 = 0.4；步驟②：乘以 100%：0.4 × 100% = <strong class="correct-hl">40%</strong>' },
  { id:'pfp6', text:'<sup>3</sup>/<sub>5</sub> 化成百分數是？',
    opts:['35%','55%','60%','65%'], ans:2,
    expl:'步驟①：<sup>3</sup>/<sub>5</sub> = 3 ÷ 5 = 0.6；步驟②：乘以 100%：0.6 × 100% = <strong class="correct-hl">60%</strong>' },
  { id:'pfp7', text:'<sup>4</sup>/<sub>5</sub> 化成百分數是？',
    opts:['45%','70%','75%','80%'], ans:3,
    expl:'步驟①：<sup>4</sup>/<sub>5</sub> = 4 ÷ 5 = 0.8；步驟②：乘以 100%：0.8 × 100% = <strong class="correct-hl">80%</strong>' },
  { id:'pfp8', text:'<sup>3</sup>/<sub>10</sub> 化成百分數是？',
    opts:['3%','13%','30%','33%'], ans:2,
    expl:'步驟①：<sup>3</sup>/<sub>10</sub> = 3 ÷ 10 = 0.3；步驟②：乘以 100%：0.3 × 100% = <strong class="correct-hl">30%</strong>' },
  { id:'pfp9', text:'<sup>7</sup>/<sub>10</sub> 化成百分數是？',
    opts:['17%','60%','70%','77%'], ans:2,
    expl:'步驟①：<sup>7</sup>/<sub>10</sub> = 7 ÷ 10 = 0.7；步驟②：乘以 100%：0.7 × 100% = <strong class="correct-hl">70%</strong>' },
  { id:'pfp10', text:'<sup>9</sup>/<sub>10</sub> 化成百分數是？',
    opts:['19%','69%','90%','99%'], ans:2,
    expl:'步驟①：<sup>9</sup>/<sub>10</sub> = 9 ÷ 10 = 0.9；步驟②：乘以 100%：0.9 × 100% = <strong class="correct-hl">90%</strong>' },
  { id:'pfp11', text:'<sup>1</sup>/<sub>20</sub> 化成百分數是？',
    opts:['1%','5%','12%','20%'], ans:1,
    expl:'步驟①：<sup>1</sup>/<sub>20</sub> = 1 ÷ 20 = 0.05；步驟②：乘以 100%：0.05 × 100% = <strong class="correct-hl">5%</strong>' },
  { id:'pfp12', text:'<sup>3</sup>/<sub>20</sub> 化成百分數是？',
    opts:['3%','12%','15%','32%'], ans:2,
    expl:'步驟①：<sup>3</sup>/<sub>20</sub> = 3 ÷ 20 = 0.15；步驟②：乘以 100%：0.15 × 100% = <strong class="correct-hl">15%</strong>' },
],

/* ─── 百份數化小數 ─── */
pct_pdec: [
  { id:'ppd1', text:'10% 化成小數是？',
    opts:['0.01','0.1','1','10'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：10 ÷ 100 = <strong class="correct-hl">0.1</strong>' },
  { id:'ppd2', text:'25% 化成小數是？',
    opts:['0.025','0.25','2.5','25'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：25 ÷ 100 = <strong class="correct-hl">0.25</strong>' },
  { id:'ppd3', text:'50% 化成小數是？',
    opts:['0.05','0.5','5','50'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：50 ÷ 100 = <strong class="correct-hl">0.5</strong>' },
  { id:'ppd4', text:'75% 化成小數是？',
    opts:['0.075','0.75','7.5','75'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：75 ÷ 100 = <strong class="correct-hl">0.75</strong>' },
  { id:'ppd5', text:'1% 化成小數是？',
    opts:['0.001','0.01','0.1','1'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：1 ÷ 100 = <strong class="correct-hl">0.01</strong>' },
  { id:'ppd6', text:'5% 化成小數是？',
    opts:['0.005','0.05','0.5','5'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：5 ÷ 100 = <strong class="correct-hl">0.05</strong>' },
  { id:'ppd7', text:'30% 化成小數是？',
    opts:['0.03','0.3','3','30'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：30 ÷ 100 = <strong class="correct-hl">0.3</strong>' },
  { id:'ppd8', text:'100% 化成小數是？',
    opts:['0.01','0.1','1','10'], ans:2,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：100 ÷ 100 = <strong class="correct-hl">1</strong>' },
  { id:'ppd9', text:'60% 化成小數是？',
    opts:['0.06','0.6','6','60'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：60 ÷ 100 = <strong class="correct-hl">0.6</strong>' },
  { id:'ppd10', text:'150% 化成小數是？',
    opts:['0.15','0.5','1.5','15'], ans:2,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：150 ÷ 100 = <strong class="correct-hl">1.5</strong>' },
  { id:'ppd11', text:'12% 化成小數是？',
    opts:['0.012','0.12','1.2','12'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：12 ÷ 100 = <strong class="correct-hl">0.12</strong>' },
  { id:'ppd12', text:'8% 化成小數是？',
    opts:['0.008','0.08','0.8','8'], ans:1,
    expl:'步驟①：百分數化小數，把百分數除以 100；步驟②：8 ÷ 100 = <strong class="correct-hl">0.08</strong>' },
],

/* ─── 小數化百份數 ─── */
pct_decp: [
  { id:'pdp1', text:'0.1 化成百分數是？',
    opts:['1%','10%','100%','0.1%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.1 × 100% = <strong class="correct-hl">10%</strong>' },
  { id:'pdp2', text:'0.5 化成百分數是？',
    opts:['5%','50%','500%','0.5%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.5 × 100% = <strong class="correct-hl">50%</strong>' },
  { id:'pdp3', text:'0.25 化成百分數是？',
    opts:['2.5%','25%','250%','0.025%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.25 × 100% = <strong class="correct-hl">25%</strong>' },
  { id:'pdp4', text:'0.75 化成百分數是？',
    opts:['7.5%','75%','750%','0.075%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.75 × 100% = <strong class="correct-hl">75%</strong>' },
  { id:'pdp5', text:'0.4 化成百分數是？',
    opts:['4%','40%','400%','0.4%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.4 × 100% = <strong class="correct-hl">40%</strong>' },
  { id:'pdp6', text:'0.8 化成百分數是？',
    opts:['8%','80%','800%','0.8%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.8 × 100% = <strong class="correct-hl">80%</strong>' },
  { id:'pdp7', text:'0.03 化成百分數是？',
    opts:['0.3%','3%','30%','300%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.03 × 100% = <strong class="correct-hl">3%</strong>' },
  { id:'pdp8', text:'1.5 化成百分數是？',
    opts:['1.5%','15%','150%','1500%'], ans:2,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：1.5 × 100% = <strong class="correct-hl">150%</strong>' },
  { id:'pdp9', text:'0.35 化成百分數是？',
    opts:['3.5%','35%','350%','0.035%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.35 × 100% = <strong class="correct-hl">35%</strong>' },
  { id:'pdp10', text:'0.07 化成百分數是？',
    opts:['0.7%','7%','70%','700%'], ans:1,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.07 × 100% = <strong class="correct-hl">7%</strong>' },
  { id:'pdp11', text:'0.9 化成百分數是？',
    opts:['0.9%','9%','90%','900%'], ans:2,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.9 × 100% = <strong class="correct-hl">90%</strong>' },
  { id:'pdp12', text:'0.01 化成百分數是？',
    opts:['0.01%','0.1%','1%','10%'], ans:2,
    expl:'步驟①：小數化百分數，乘以 100%；步驟②：0.01 × 100% = <strong class="correct-hl">1%</strong>' },
],

/* ─── 比較大小 ─── */
pct_cmp: [
  { id:'pcm1', text:'下列哪個最大？',
    opts:['75%','0.8','<sup>3</sup>/<sub>4</sub>','0.72'], ans:1,
    expl:'步驟①：全部化成小數：75%=0.75，0.8=0.8，<sup>3</sup>/<sub>4</sub>=0.75，0.72=0.72；步驟②：比較：0.8 > 0.75 > 0.72；步驟③：最大是 <strong class="correct-hl">0.8</strong>' },
  { id:'pcm2', text:'下列哪個最小？',
    opts:['30%','<sup>1</sup>/<sub>4</sub>','0.28','35%'], ans:2,
    expl:'步驟①：全部化成小數：30%=0.30，<sup>1</sup>/<sub>4</sub>=0.25，0.28=0.28，35%=0.35；步驟②：由小到大：0.25 < 0.28 < 0.30 < 0.35；步驟③：最小是 <strong class="correct-hl">0.28</strong>' },
  { id:'pcm3', text:'0.45 ○ 40%，○ 應是什麼符號？',
    opts:['>','<','=','無法比較'], ans:0,
    expl:'步驟①：40% 化成小數 = 0.40；步驟②：比較 0.45 與 0.40；步驟③：0.45 > 0.40，即 0.45 <strong class="correct-hl">></strong> 40%' },
  { id:'pcm4', text:'<sup>1</sup>/<sub>5</sub> ○ 25%，○ 應是什麼符號？',
    opts:['>','<','=','無法比較'], ans:1,
    expl:'步驟①：<sup>1</sup>/<sub>5</sub> = 0.2，25% = 0.25；步驟②：比較 0.2 與 0.25；步驟③：0.2 < 0.25，即 <sup>1</sup>/<sub>5</sub> <strong class="correct-hl"><</strong> 25%' },
  { id:'pcm5', text:'<sup>3</sup>/<sub>4</sub> ○ 0.75，○ 應是什麼符號？',
    opts:['>','<','=','無法比較'], ans:2,
    expl:'步驟①：<sup>3</sup>/<sub>4</sub> = 3 ÷ 4 = 0.75；步驟②：比較 0.75 與 0.75；步驟③：兩者相等，即 <sup>3</sup>/<sub>4</sub> <strong class="correct-hl">=</strong> 0.75' },
  { id:'pcm6', text:'下列哪個最大？',
    opts:['0.87','85%','<sup>9</sup>/<sub>10</sub>','0.89'], ans:2,
    expl:'步驟①：全部化成小數：0.87，85%=0.85，<sup>9</sup>/<sub>10</sub>=0.9，0.89；步驟②：比較：0.9 > 0.89 > 0.87 > 0.85；步驟③：最大是 <strong class="correct-hl"><sup>9</sup>/<sub>10</sub></strong>' },
  { id:'pcm7', text:'下列哪個最小？',
    opts:['<sup>1</sup>/<sub>2</sub>','55%','0.45','<sup>6</sup>/<sub>10</sub>'], ans:2,
    expl:'步驟①：全部化成小數：<sup>1</sup>/<sub>2</sub>=0.5，55%=0.55，0.45，<sup>6</sup>/<sub>10</sub>=0.6；步驟②：由小到大：0.45 < 0.5 < 0.55 < 0.6；步驟③：最小是 <strong class="correct-hl">0.45</strong>' },
  { id:'pcm8', text:'60% ○ <sup>3</sup>/<sub>5</sub>，○ 應是什麼符號？',
    opts:['>','<','=','無法比較'], ans:2,
    expl:'步驟①：60% = 0.6；步驟②：<sup>3</sup>/<sub>5</sub> = 3 ÷ 5 = 0.6；步驟③：兩者相等，即 60% <strong class="correct-hl">=</strong> <sup>3</sup>/<sub>5</sub>' },
  { id:'pcm9', text:'下列哪個不等於 0.4？',
    opts:['40%','<sup>2</sup>/<sub>5</sub>','4%','<sup>4</sup>/<sub>10</sub>'], ans:2,
    expl:'步驟①：40%=0.4 ✓，<sup>2</sup>/<sub>5</sub>=0.4 ✓，4%=0.04 ✗，<sup>4</sup>/<sub>10</sub>=0.4 ✓；步驟②：不等於 0.4 的是 <strong class="correct-hl">4%</strong>' },
  { id:'pcm10', text:'以下各數由小到大排列，排第二的是哪個？',
    opts:['0.3','<sup>1</sup>/<sub>4</sub>','35%','28%'], ans:3,
    expl:'步驟①：化成小數：0.3=0.30，<sup>1</sup>/<sub>4</sub>=0.25，35%=0.35，28%=0.28；步驟②：由小到大：0.25，0.28，0.30，0.35；步驟③：排第二的是 <strong class="correct-hl">28%</strong>' },
  { id:'pcm11', text:'0.6 ○ 58%，○ 應是什麼符號？',
    opts:['>','<','=','無法比較'], ans:0,
    expl:'步驟①：58% 化成小數 = 0.58；步驟②：比較 0.6 與 0.58；步驟③：0.6 > 0.58，即 0.6 <strong class="correct-hl">></strong> 58%' },
  { id:'pcm12', text:'下列哪個最大？',
    opts:['<sup>2</sup>/<sub>5</sub>','45%','0.38','0.4'], ans:1,
    expl:'步驟①：化成小數：<sup>2</sup>/<sub>5</sub>=0.4，45%=0.45，0.38，0.4；步驟②：比較：0.45 > 0.4 = 0.4 > 0.38；步驟③：最大是 <strong class="correct-hl">45%</strong>' },
],

/* ─── 比 ─── */
ratio: [
  { id:'rat1', text:'化簡比 36 : 48',
    opts:['2:3','3:4','4:5','6:8'], ans:1,
    expl:'第一步：求 H.C.F.(36,48) = 12<br>第二步：兩數同除 12：<br>36 ÷ 12 = 3，48 ÷ 12 = 4<br>結果：<strong class="correct-hl">3:4</strong>' },
  { id:'rat2', text:'甲 : 乙 = 4 : 7，甲 = 28，乙 = ?',
    opts:['35','42','49','56'], ans:2,
    expl:'第一步：求「每份」的值：28 ÷ 4 = 7<br>第二步：乙 = 7 份 × 7 = <strong class="correct-hl">49</strong>' },
  { id:'rat3', text:'按 2:3 的比把 90 分成兩份，較小的一份是？',
    opts:['36','38','40','45'], ans:0,
    expl:'第一步：共 2 + 3 = 5 份<br>第二步：每份 = 90 ÷ 5 = 18<br>第三步：較小的一份（2 份）= 2 × 18 = <strong class="correct-hl">36</strong>' },
  { id:'rat4', text:'3 : 5 = 12 : □',
    opts:['15','18','20','25'], ans:2,
    expl:'第一步：求左邊放大了多少倍：12 ÷ 3 = 4<br>第二步：右邊同樣放大 4 倍：<br>□ = 5 × 4 = <strong class="correct-hl">20</strong>' },
  { id:'rat5', text:'甲:乙:丙 = 2:3:4，三者之和為 72，求甲',
    opts:['12','14','16','18'], ans:2,
    expl:'第一步：共 2 + 3 + 4 = 9 份<br>第二步：每份 = 72 ÷ 9 = 8<br>第三步：甲 = 2 份 × 8 = <strong class="correct-hl">16</strong>' },
  { id:'rat6', text:'地圖比例尺 1:500，圖上 3 cm 代表實際多少米？',
    opts:['15 m','150 m','1500 m','15000 m'], ans:0,
    expl:'第一步：實際距離 = 圖上距離 × 500：<br>3 × 500 = 1500 cm<br>第二步：cm 轉做 m（÷100）：<br>1500 cm = <strong class="correct-hl">15 m</strong>' },
  { id:'rat7', text:'全班 <sup>3</sup>/<sub>5</sub> 是女生，男生:女生 = ?',
    opts:['2:3','3:2','3:5','2:5'], ans:0,
    expl:'第一步：女生佔 <sup>3</sup>/<sub>5</sub>，男生佔全班的餘下部分：<br>1 − <sup>3</sup>/<sub>5</sub> = <sup>2</sup>/<sub>5</sub><br>第二步：男:女 = <sup>2</sup>/<sub>5</sub> : <sup>3</sup>/<sub>5</sub> = <strong class="correct-hl">2:3</strong>' },
  { id:'rat8', text:'紅珠:藍珠 = 5:3，共有 120 粒珠，藍珠有多少粒？',
    opts:['40','45','48','50'], ans:1,
    expl:'第一步：共 5 + 3 = 8 份<br>第二步：每份 = 120 ÷ 8 = 15<br>第三步：藍珠 = 3 份 × 15 = <strong class="correct-hl">45</strong>' },
  { id:'rat9', text:'化簡比 <sup>3</sup>/<sub>4</sub> : <sup>2</sup>/<sub>3</sub>',
    opts:['9:8','8:9','3:2','2:3'], ans:0,
    expl:'第一步：求兩個分母 4 和 3 的公分母：12<br>第二步：兩邊同乘 12，化走分數：<br><sup>3</sup>/<sub>4</sub> × 12 = 9，<sup>2</sup>/<sub>3</sub> × 12 = 8<br>結果：<strong class="correct-hl">9:8</strong>' },
  { id:'rat10', text:'甲:乙:丙 = 3:4:5，三者之和 360，求丙',
    opts:['90','100','120','150'], ans:3,
    expl:'第一步：共 3 + 4 + 5 = 12 份<br>第二步：每份 = 360 ÷ 12 = 30<br>第三步：丙 = 5 份 × 30 = <strong class="correct-hl">150</strong>' },
  { id:'rat11', text:'地圖比例 1:25000，實地 5 km 在地圖上是多少 cm？',
    opts:['10 cm','15 cm','20 cm','25 cm'], ans:2,
    expl:'第一步：統一單位，把 5 km 轉做 cm：<br>5 km = 500000 cm<br>第二步：圖上距離 = 實際距離 ÷ 25000：<br>500000 ÷ 25000 = <strong class="correct-hl">20 cm</strong>' },
  { id:'rat12', text:'8 個工人 5 天完成工程，12 個工人需幾天？',
    opts:['3 天','3<sup>1</sup>/<sub>3</sub> 天','4 天','4<sup>1</sup>/<sub>3</sub> 天'], ans:1,
    expl:'第一步：求總工作量（人 × 天）：<br>8 × 5 = 40 人天<br>第二步：12 人所需天數 = 總工作量 ÷ 人數：<br>40 ÷ 12 = <strong class="correct-hl">3<sup>1</sup>/<sub>3</sub></strong> 天' },
  { id:'rat13', text:'三角形三個角之比是 1:2:3，最大角是多少度？',
    opts:['60°','70°','80°','90°'], ans:3,
    expl:'第一步：三角形內角和是 180°，共 1+2+3 = 6 份<br>第二步：每份 = 180° ÷ 6 = 30°<br>第三步：最大角 = 3 份 × 30° = <strong class="correct-hl">90°</strong>' },
  { id:'rat14', text:'紅藍球比 3:7，共 200 個，藍球有多少？',
    opts:['50','60','120','140'], ans:3,
    expl:'第一步：共 3 + 7 = 10 份<br>第二步：每份 = 200 ÷ 10 = 20<br>第三步：藍球 = 7 份 × 20 = <strong class="correct-hl">140</strong> 個' },
  { id:'rat15', text:'甲:乙 = 2:5，乙:丙 = 3:4，甲:乙:丙 = ?',
    opts:['6:15:20','2:5:4','6:10:20','2:3:4'], ans:0,
    expl:'第一步：要令兩個比中「乙」的數值相同，求 5 和 3 的公倍數：15<br>第二步：甲:乙 = 2:5，兩邊乘 3 → 6:15；乙:丙 = 3:4，兩邊乘 5 → 15:20<br>第三步：合併（乙都是 15）：甲:乙:丙 = <strong class="correct-hl">6:15:20</strong>' },
  { id:'rat16', text:'甲的儲蓄是乙的 <sup>5</sup>/<sub>3</sub> 倍，甲:乙 = ?',
    opts:['3:5','5:3','1:5','5:1'], ans:1,
    expl:'第一步：「甲是乙的 <sup>5</sup>/<sub>3</sub> 倍」寫成算式：<br>甲 = <sup>5</sup>/<sub>3</sub> × 乙<br>第二步：即甲:乙 = 5:3，寫成比就是 <strong class="correct-hl">5:3</strong>' },
],

/* ─── 代數 ─── */
algebra: [
  { id:'alg1', text:'解方程：3x + 5 = 23',
    opts:['x = 5','x = 6','x = 7','x = 8'], ans:1,
    expl:'第一步：將 5 移到右邊（兩邊減 5）：<br>3x = 23 − 5 = 18<br>第二步：兩邊除以 3：<br>x = 18 ÷ 3 = <strong class="correct-hl">6</strong>' },
  { id:'alg2', text:'解方程：4y − 7 = 13',
    opts:['y = 4','y = 5','y = 6','y = 7'], ans:1,
    expl:'第一步：將 −7 移到右邊（兩邊加 7）：<br>4y = 13 + 7 = 20<br>第二步：兩邊除以 4：<br>y = 20 ÷ 4 = <strong class="correct-hl">5</strong>' },
  { id:'alg3', text:'解方程：2(3a − 1) = 16',
    opts:['a = 2','a = 3','a = 4','a = 5'], ans:1,
    expl:'第一步：兩邊先除以 2，脫去括號：<br>3a − 1 = 16 ÷ 2 = 8<br>第二步：將 −1 移到右邊（兩邊加 1）：<br>3a = 8 + 1 = 9<br>第三步：兩邊除以 3：<br>a = 9 ÷ 3 = <strong class="correct-hl">3</strong>' },
  { id:'alg4', text:'解方程：x ÷ 5 + 3 = 7',
    opts:['x = 15','x = 20','x = 25','x = 40'], ans:1,
    expl:'第一步：將 3 移到右邊（兩邊減 3）：<br>x ÷ 5 = 7 − 3 = 4<br>第二步：兩邊乘 5：<br>x = 4 × 5 = <strong class="correct-hl">20</strong>' },
  { id:'alg5', text:'解方程：5m − 3 = 2m + 9',
    opts:['m = 3','m = 4','m = 5','m = 6'], ans:1,
    expl:'第一步：將 m 項移到左邊，數字移到右邊：<br>5m − 2m = 9 + 3<br>第二步：合併同類項：<br>3m = 12<br>第三步：兩邊除以 3：<br>m = 12 ÷ 3 = <strong class="correct-hl">4</strong>' },
  { id:'alg6', text:'a = 4，b = 2，求 3a − 2b²',
    opts:['2','4','6','8'], ans:1,
    expl:'第一步：代入 a = 4：3a = 3 × 4 = 12<br>第二步：代入 b = 2：b² = 2² = 4，所以 2b² = 2 × 4 = 8<br>第三步：相減：<br>3a − 2b² = 12 − 8 = <strong class="correct-hl">4</strong>' },
  { id:'alg7', text:'化簡：5x − 3y + 2x + 7y',
    opts:['7x + 4y','7x − 4y','3x + 10y','7x + 10y'], ans:0,
    expl:'第一步：將含 x 的項合併：<br>5x + 2x = 7x<br>第二步：將含 y 的項合併：<br>−3y + 7y = 4y<br>結果：<strong class="correct-hl">7x + 4y</strong>' },
  { id:'alg8', text:'解方程：4(x + 2) = 3x + 11',
    opts:['x = 2','x = 3','x = 4','x = 5'], ans:1,
    expl:'第一步：展開左邊括號：<br>4x + 8 = 3x + 11<br>第二步：將 x 項移到左邊，數字移到右邊：<br>4x − 3x = 11 − 8<br>結果：x = <strong class="correct-hl">3</strong>' },
  { id:'alg9', text:'解方程：2n + 7 = n + 15',
    opts:['n = 6','n = 7','n = 8','n = 9'], ans:2,
    expl:'第一步：將 n 項移到左邊，數字移到右邊：<br>2n − n = 15 − 7<br>結果：n = <strong class="correct-hl">8</strong>' },
  { id:'alg10', text:'某數 n 滿足 3n − 5 = 2n + 4，n = ?',
    opts:['7','8','9','10'], ans:2,
    expl:'第一步：將 n 項移到左邊，數字移到右邊：<br>3n − 2n = 4 + 5<br>第二步：左邊 3n − 2n 合併為 n，右邊 4 + 5 = 9：<br>n = <strong class="correct-hl">9</strong>' },
  { id:'alg11', text:'如果 2x + y = 10，x = 3，求 y',
    opts:['3','4','5','6'], ans:1,
    expl:'第一步：代入 x = 3：<br>2 × 3 + y = 10<br>即 6 + y = 10<br>第二步：將 6 移到右邊（兩邊減 6）：<br>y = 10 − 6 = <strong class="correct-hl">4</strong>' },
  { id:'alg12', text:'解方程：<sup>x</sup>/<sub>3</sub> + 4 = 7',
    opts:['x = 6','x = 9','x = 11','x = 15'], ans:1,
    expl:'第一步：將 4 移到右邊（兩邊減 4）：<br><sup>x</sup>/<sub>3</sub> = 7 − 4 = 3<br>第二步：兩邊乘 3：<br>x = 3 × 3 = <strong class="correct-hl">9</strong>' },
  { id:'alg13', text:'化簡：4(2x − 3) − 2(x + 5)',
    opts:['6x − 22','6x − 2','8x − 22','8x − 2'], ans:0,
    expl:'第一步：展開兩個括號：<br>4(2x − 3) = 8x − 12<br>2(x + 5) = 2x + 10<br>第二步：相減：<br>8x − 12 − 2x − 10<br>第三步：合併同類項：<br>(8x − 2x) + (−12 − 10) = <strong class="correct-hl">6x − 22</strong>' },
  { id:'alg14', text:'解方程：3(x + 4) = 2(x + 9)',
    opts:['x = 4','x = 6','x = 8','x = 10'], ans:1,
    expl:'第一步：展開兩邊括號：<br>3x + 12 = 2x + 18<br>第二步：將 x 項移到左邊，數字移到右邊：<br>3x − 2x = 18 − 12<br>結果：x = <strong class="correct-hl">6</strong>' },
  { id:'alg15', text:'設 y = 3x − 5，x = 4，y = ?',
    opts:['5','6','7','8'], ans:2,
    expl:'第一步：代入 x = 4：<br>y = 3 × 4 − 5<br>第二步：先乘後減：<br>y = 12 − 5 = <strong class="correct-hl">7</strong>' },
  { id:'alg16', text:'解方程：5 − 2x = 11',
    opts:['x = −3','x = −2','x = 3','x = 8'], ans:0,
    expl:'第一步：將 5 移到右邊（兩邊減 5）：<br>−2x = 11 − 5 = 6<br>第二步：兩邊除以 −2：<br>x = 6 ÷ (−2) = <strong class="correct-hl">−3</strong>' },
  { id:'alg17', text:'a = 5，b = −2，a² + 3b = ?',
    opts:['19','22','25','31'], ans:0,
    expl:'第一步：代入 a = 5：a² = 5² = 25<br>第二步：代入 b = −2：3b = 3 × (−2) = −6<br>第三步：相加：<br>a² + 3b = 25 + (−6) = 25 − 6 = <strong class="correct-hl">19</strong>' },
  { id:'alg18', text:'一個數比它的 3 倍少 10，這個數是？',
    opts:['4','5','6','7'], ans:1,
    expl:'第一步：設這個數為 x，「它的 3 倍」是 3x，「比 3x 少 10」即 3x − 10：<br>方程：x = 3x − 10<br>第二步：將 x 項移到右邊（兩邊減 x）：<br>0 = 3x − x − 10 = 2x − 10<br>即 2x = 10<br>第三步：兩邊除以 2：<br>x = <strong class="correct-hl">5</strong>' },
  { id:'alg19', text:'解方程：<sup>2x</sup>/<sub>3</sub> = 8',
    opts:['x = 10','x = 12','x = 14','x = 16'], ans:1,
    expl:'第一步：兩邊乘 3：<br>2x = 8 × 3 = 24<br>第二步：兩邊除以 2：<br>x = 24 ÷ 2 = <strong class="correct-hl">12</strong>' },
],

/* ─── 圖形 ─── */
shape: [
  { id:'shp1', text:'圓形面積，半徑 = 5 cm（π ≈ 3.14）',
    opts:['31.4 cm²','62.8 cm²','78.5 cm²','157 cm²'], ans:2,
    expl:'第一步：套用公式 面積 = π × r²<br>第二步：r² = 5² = 25<br>第三步：3.14 × 25 = <strong class="correct-hl">78.5 cm²</strong>' },
  { id:'shp2', text:'三角形面積：底 12 cm，高 8 cm',
    opts:['24 cm²','40 cm²','48 cm²','96 cm²'], ans:2,
    expl:'第一步：套用公式 面積 = <sup>1</sup>/<sub>2</sub> × 底 × 高<br>第二步：<sup>1</sup>/<sub>2</sub> × 12 × 8 = <strong class="correct-hl">48 cm²</strong>' },
  { id:'shp3', text:'正立方體邊長 6 cm，體積是？',
    opts:['36 cm³','108 cm³','216 cm³','432 cm³'], ans:2,
    expl:'第一步：套用公式 體積 = 邊長³<br>第二步：6 × 6 × 6 = <strong class="correct-hl">216 cm³</strong>' },
  { id:'shp4', text:'圓形周長，直徑 = 14 cm（π ≈ <sup>22</sup>/<sub>7</sub>）',
    opts:['22 cm','44 cm','154 cm','616 cm'], ans:1,
    expl:'第一步：套用公式 周長 = π × 直徑<br>第二步：<sup>22</sup>/<sub>7</sub> × 14 = <strong class="correct-hl">44 cm</strong>' },
  { id:'shp5', text:'梯形面積：兩平行邊 8 cm 和 12 cm，高 5 cm',
    opts:['40 cm²','50 cm²','60 cm²','100 cm²'], ans:1,
    expl:'第一步：套用公式 面積 = <sup>1</sup>/<sub>2</sub> × (上底+下底) × 高<br>第二步：<sup>1</sup>/<sub>2</sub> × (8+12) × 5 = <sup>1</sup>/<sub>2</sub> × 20 × 5 = <strong class="correct-hl">50 cm²</strong>' },
  { id:'shp6', text:'長方體：長 8 cm，寬 5 cm，高 4 cm，體積是？',
    opts:['120 cm³','140 cm³','160 cm³','200 cm³'], ans:2,
    expl:'第一步：套用公式 體積 = 長 × 寬 × 高<br>第二步：8 × 5 × 4 = <strong class="correct-hl">160 cm³</strong>' },
  { id:'shp7', text:'正方形周長 = 36 cm，面積是？',
    opts:['64 cm²','81 cm²','100 cm²','144 cm²'], ans:1,
    expl:'第一步：求邊長：36 ÷ 4 = 9 cm<br>第二步：面積 = 邊長² = 9² = <strong class="correct-hl">81 cm²</strong>' },
  { id:'shp8', text:'圓柱體：底面半徑 3 cm，高 10 cm，體積（π ≈ 3.14）？',
    opts:['94.2 cm³','188.4 cm³','282.6 cm³','314 cm³'], ans:2,
    expl:'第一步：套用公式 體積 = π × r² × h<br>第二步：r² = 3² = 9<br>第三步：3.14 × 9 × 10 = <strong class="correct-hl">282.6 cm³</strong>' },
  { id:'shp9', text:'一個三角形面積為 60 cm²，底為 12 cm，高是？',
    opts:['5 cm','8 cm','10 cm','12 cm'], ans:2,
    expl:'第一步：代入公式 面積 = <sup>1</sup>/<sub>2</sub> × 底 × 高：<br><sup>1</sup>/<sub>2</sub> × 12 × h = 60，即 6h = 60<br>第二步：兩邊除以 6：<br>h = <strong class="correct-hl">10 cm</strong>' },
  { id:'shp10', text:'圓形面積 ≈ 78.5 cm²（π ≈ 3.14），直徑是？',
    opts:['5 cm','8 cm','10 cm','12 cm'], ans:2,
    expl:'第一步：由面積公式反推 r²：<br>r² = 78.5 ÷ 3.14 = 25<br>第二步：開方求 r：r = 5 cm<br>第三步：直徑 = 2 × r = <strong class="correct-hl">10 cm</strong>' },
  { id:'shp11', text:'環形面積：外圓半徑 5 cm，內圓半徑 3 cm（π ≈ 3.14）',
    opts:['25.12 cm²','37.68 cm²','50.24 cm²','62.8 cm²'], ans:2,
    expl:'第一步：環形面積 = 外圓面積 − 內圓面積 = π × (R² − r²)<br>第二步：R² − r² = 5² − 3² = 25 − 9 = 16<br>第三步：3.14 × 16 = <strong class="correct-hl">50.24 cm²</strong>' },
  { id:'shp12', text:'平行四邊形：底 15 cm，高 8 cm，面積是？',
    opts:['90 cm²','100 cm²','110 cm²','120 cm²'], ans:3,
    expl:'第一步：套用公式 面積 = 底 × 高<br>第二步：15 × 8 = <strong class="correct-hl">120 cm²</strong>' },
  { id:'shp13', text:'長方體：長 10 cm，寬 6 cm，高 4 cm，表面積是？',
    opts:['188 cm²','228 cm²','248 cm²','308 cm²'], ans:2,
    expl:'第一步：套用公式 表面積 = 2(長×寬 + 長×高 + 寬×高)<br>第二步：長×寬=60，長×高=40，寬×高=24，相加=124<br>第三步：2 × 124 = <strong class="correct-hl">248 cm²</strong>' },
  { id:'shp14', text:'圓形周長 44 cm（π ≈ <sup>22</sup>/<sub>7</sub>），面積是？',
    opts:['100 cm²','121 cm²','144 cm²','154 cm²'], ans:3,
    expl:'第一步：由周長公式反推半徑：<br>44 = 2 × <sup>22</sup>/<sub>7</sub> × r，r = 44 ÷ (2 × <sup>22</sup>/<sub>7</sub>) = 7 cm<br>第二步：面積 = <sup>22</sup>/<sub>7</sub> × r² = <sup>22</sup>/<sub>7</sub> × 49 = <strong class="correct-hl">154 cm²</strong>' },
  { id:'shp15', text:'L 形：大長方形 10×8 cm，缺去右下角 3×4 cm，面積是？',
    opts:['56 cm²','68 cm²','72 cm²','80 cm²'], ans:1,
    expl:'第一步：先計算大長方形面積：<br>10 × 8 = 80 cm²<br>第二步：減去缺角的面積：<br>3 × 4 = 12 cm²<br>第三步：80 − 12 = <strong class="correct-hl">68 cm²</strong>' },
  { id:'shp16', text:'菱形兩條對角線 12 cm 和 8 cm，面積是？',
    opts:['40 cm²','48 cm²','56 cm²','96 cm²'], ans:1,
    expl:'第一步：套用公式 面積 = <sup>1</sup>/<sub>2</sub> × 對角線₁ × 對角線₂<br>第二步：<sup>1</sup>/<sub>2</sub> × 12 × 8 = <strong class="correct-hl">48 cm²</strong>' },
  { id:'shp17', text:'等邊三角形周長 36 cm，高 8 cm，面積是？',
    opts:['36 cm²','48 cm²','54 cm²','72 cm²'], ans:1,
    expl:'第一步：求邊長（等邊三角形三邊相等）：<br>36 ÷ 3 = 12 cm<br>第二步：面積 = <sup>1</sup>/<sub>2</sub> × 底 × 高：<br><sup>1</sup>/<sub>2</sub> × 12 × 8 = <strong class="correct-hl">48 cm²</strong>' },
  { id:'shp18', text:'圓柱底面直徑 6 cm，高 10 cm，體積（π ≈ 3.14）是？',
    opts:['188.4 cm³','282.6 cm³','314 cm³','565.2 cm³'], ans:1,
    expl:'第一步：求半徑：6 ÷ 2 = 3 cm<br>第二步：套用公式 體積 = π × r² × h：<br>3.14 × 9 × 10 = <strong class="correct-hl">282.6 cm³</strong>' },
],

/* ─── 速率 ─── */
speed: [
  { id:'spd1', text:'速率 = 80 km/h，時間 = 2.5 小時，路程 = ?',
    opts:['160 km','180 km','200 km','240 km'], ans:2,
    expl:'第一步：套用公式 路程 = 速率 × 時間<br>第二步：80 × 2.5 = <strong class="correct-hl">200 km</strong>' },
  { id:'spd2', text:'路程 = 300 km，時間 = 4 小時，平均速率 = ?',
    opts:['65 km/h','70 km/h','75 km/h','80 km/h'], ans:2,
    expl:'第一步：套用公式 速率 = 路程 ÷ 時間<br>第二步：300 ÷ 4 = <strong class="correct-hl">75 km/h</strong>' },
  { id:'spd3', text:'路程 = 150 km，速率 = 60 km/h，時間 = ?',
    opts:['2 小時','2.5 小時','3 小時','3.5 小時'], ans:1,
    expl:'第一步：套用公式 時間 = 路程 ÷ 速率<br>第二步：150 ÷ 60 = <strong class="correct-hl">2.5 小時</strong>' },
  { id:'spd4', text:'火車 240 km，用 1.5 小時，平均速率 = ?',
    opts:['120 km/h','140 km/h','160 km/h','180 km/h'], ans:2,
    expl:'第一步：套用公式 速率 = 路程 ÷ 時間<br>第二步：240 ÷ 1.5 = <strong class="correct-hl">160 km/h</strong>' },
  { id:'spd5', text:'Peter 以 4.5 km/h 步行，行了 45 分鐘，共行了幾公里？',
    opts:['2.75 km','3 km','3.375 km','3.5 km'], ans:2,
    expl:'第一步：統一單位，將 45 分鐘轉做小時：<br>45 ÷ 60 = 0.75 小時<br>第二步：路程 = 速率 × 時間：<br>4.5 × 0.75 = <strong class="correct-hl">3.375 km</strong>' },
  { id:'spd6', text:'某人 90 分鐘走了 6 km，他的速率是？',
    opts:['3 km/h','4 km/h','5 km/h','6 km/h'], ans:1,
    expl:'第一步：將 90 分鐘轉做小時：<br>90 ÷ 60 = 1.5 小時<br>第二步：速率 = 路程 ÷ 時間：<br>6 ÷ 1.5 = <strong class="correct-hl">4 km/h</strong>' },
  { id:'spd7', text:'汽車以 90 km/h 行駛，到達目的地需要 3 小時，路程是？',
    opts:['240 km','270 km','300 km','360 km'], ans:1,
    expl:'第一步：套用公式 路程 = 速率 × 時間<br>第二步：90 × 3 = <strong class="correct-hl">270 km</strong>' },
  { id:'spd8', text:'小明和小華同時從同一地點出發，方向相反，速率分別為 50 km/h 和 70 km/h，2 小時後相距多遠？',
    opts:['120 km','200 km','240 km','280 km'], ans:2,
    expl:'第一步：兩人方向相反，相距的增加速率 = 兩速相加：<br>50 + 70 = 120 km/h<br>第二步：相距 = 合速 × 時間：<br>120 × 2 = <strong class="correct-hl">240 km</strong>' },
  { id:'spd9', text:'小明步行 10 km 用 2 小時，再跑步 5 km 用 0.5 小時，全程平均速率是？',
    opts:['5 km/h','6 km/h','7 km/h','8 km/h'], ans:1,
    expl:'第一步：求總路程：<br>10 + 5 = 15 km<br>第二步：求總時間：<br>2 + 0.5 = 2.5 小時<br>第三步：平均速率 = 總路程 ÷ 總時間：<br>15 ÷ 2.5 = <strong class="correct-hl">6 km/h</strong>' },
  { id:'spd10', text:'兩地相距 300 km，兩車同時相向出發，速率 70 和 80 km/h，幾小時後相遇？',
    opts:['2 小時','2.5 小時','3 小時','3.5 小時'], ans:0,
    expl:'第一步：相向而行，合速 = 兩速相加：<br>70 + 80 = 150 km/h<br>第二步：相遇時間 = 總距離 ÷ 合速：<br>300 ÷ 150 = <strong class="correct-hl">2 小時</strong>' },
  { id:'spd11', text:'汽車以 60 km/h 行 2 小時，再以 90 km/h 行 1 小時，全程平均速率是？',
    opts:['70 km/h','72 km/h','75 km/h','80 km/h'], ans:0,
    expl:'第一步：求各段路程：<br>60 × 2 = 120 km，90 × 1 = 90 km，總路程 = 120 + 90 = 210 km<br>第二步：總時間 = 2 + 1 = 3 小時<br>第三步：平均速率 = 總路程 ÷ 總時間：<br>210 ÷ 3 = <strong class="correct-hl">70 km/h</strong>' },
  { id:'spd12', text:'往返各 60 km，去程 40 km/h，回程 60 km/h，全程平均速率是？',
    opts:['48 km/h','50 km/h','52 km/h','54 km/h'], ans:0,
    expl:'第一步：求各段時間：<br>去程 = 60 ÷ 40 = 1.5 h，回程 = 60 ÷ 60 = 1 h<br>第二步：總路程 = 60 + 60 = 120 km，總時間 = 1.5 + 1 = 2.5 h<br>第三步：平均速率 = 120 ÷ 2.5 = <strong class="correct-hl">48 km/h</strong>' },
  { id:'spd13', text:'火車長 200 m，以 72 km/h 通過 1.3 km 隧道，需多少秒？',
    opts:['60 秒','75 秒','80 秒','90 秒'], ans:1,
    expl:'第一步：將速率轉做 m/s：<br>72 km/h = 72×1000÷3600 = 20 m/s<br>第二步：火車完全穿過隧道要走的總距離 = 隧道長 + 車身長：<br>1300 + 200 = 1500 m<br>第三步：時間 = 距離 ÷ 速率：<br>1500 ÷ 20 = <strong class="correct-hl">75 秒</strong>' },
  { id:'spd14', text:'甲速 50 km/h 先走，2 小時後乙以 70 km/h 追趕，乙需幾小時追上？',
    opts:['4 小時','5 小時','6 小時','7 小時'], ans:1,
    expl:'第一步：甲已先走的距離：<br>50 × 2 = 100 km<br>第二步：追及速度差：<br>70 − 50 = 20 km/h<br>第三步：追上時間 = 距離差 ÷ 速度差：<br>100 ÷ 20 = <strong class="correct-hl">5 小時</strong>' },
  { id:'spd15', text:'AB 相距 280 km，甲速 80 由 A 出發，乙速 60 由 B 出發，同時相向，幾小時後相距只剩 70 km？',
    opts:['1.5 小時','2 小時','2.5 小時','3 小時'], ans:0,
    expl:'第一步：需要縮短的距離 = 總距離 − 剩餘距離：<br>280 − 70 = 210 km<br>第二步：合速 = 80 + 60 = 140 km/h<br>第三步：時間 = 210 ÷ 140 = <strong class="correct-hl">1.5 小時</strong>' },
  { id:'spd16', text:'某人 30 分鐘走了 4 km，速率是多少 km/h？',
    opts:['6','7','8','9'], ans:2,
    expl:'第一步：將 30 分鐘轉做小時：<br>30 ÷ 60 = 0.5 h<br>第二步：速率 = 路程 ÷ 時間：<br>4 ÷ 0.5 = <strong class="correct-hl">8</strong> km/h' },
],

/* ─── 文字題 ─── */
word: [
  { id:'wrd1',
    context: '小明有 360 粒糖，他送出了 <sup>1</sup>/<sub>4</sub>，然後又用掉了 30 粒。',
    text: '小明最後剩下多少粒糖？',
    opts:['220','230','240','250'], ans:2,
    expl:'第一步：求送出的數量：<br>360 × <sup>1</sup>/<sub>4</sub> = 90 粒<br>第二步：剩下 = 總數 − 送出 − 用掉：<br>360 − 90 − 30 = <strong class="correct-hl">240</strong> 粒' },
  { id:'wrd2',
    context: '一個盒子裏有 48 粒紅色和藍色珠，紅:藍 = 5:3。',
    text: '紅色珠有多少粒？',
    opts:['18','24','30','36'], ans:2,
    expl:'第一步：共 5 + 3 = 8 份<br>第二步：每份 = 48 ÷ 8 = 6<br>第三步：紅色 = 5 份 × 6 = <strong class="correct-hl">30</strong> 粒' },
  { id:'wrd3',
    context: '一個水箱 <sup>3</sup>/<sub>4</sub> 滿時裝有 540 公升水。',
    text: '要把水箱裝滿，還需加多少公升水？',
    opts:['135 公升','180 公升','270 公升','360 公升'], ans:1,
    expl:'第一步：求水箱全滿的容量：<br>540 ÷ <sup>3</sup>/<sub>4</sub> = 540 × <sup>4</sup>/<sub>3</sub> = 720 公升<br>第二步：還需 = 全滿 − 現有：<br>720 − 540 = <strong class="correct-hl">180 公升</strong>' },
  { id:'wrd4',
    context: '一本書原價 $y，打八折後售 $48。',
    text: '原價 y 是多少？',
    opts:['$54','$56','$60','$64'], ans:2,
    expl:'第一步：八折即原價的 80%：<br>0.8y = 48<br>第二步：兩邊除以 0.8：<br>y = 48 ÷ 0.8 = <strong class="correct-hl">$60</strong>' },
  { id:'wrd5',
    context: '長方形農田，長 80 m，寬 60 m，要用圍欄圍住四邊。',
    text: '圍欄每米 $5，共需多少費用？',
    opts:['$1200','$1400','$1600','$1800'], ans:1,
    expl:'第一步：求周界：<br>(80 + 60) × 2 = 280 m<br>第二步：費用 = 周界 × 每米價錢：<br>280 × 5 = <strong class="correct-hl">$1400</strong>' },
  { id:'wrd6',
    context: '全班 108 人，男:女 = 5:4。',
    text: '男生比女生多多少人？',
    opts:['10','12','14','16'], ans:1,
    expl:'第一步：共 5 + 4 = 9 份，每份 = 108 ÷ 9 = 12<br>第二步：男生 = 5 × 12 = 60，女生 = 4 × 12 = 48<br>第三步：相差 = 60 − 48 = <strong class="correct-hl">12</strong> 人' },
  { id:'wrd7',
    context: 'HINSON 用 <sup>2</sup>/<sub>5</sub> 的零用錢買書，<sup>1</sup>/<sub>4</sub> 買食物，其餘買玩具。零用錢共 $200。',
    text: '買玩具用了多少錢？',
    opts:['$60','$70','$75','$80'], ans:1,
    expl:'第一步：求買書同買食物共佔的分數（通分為 20）：<br><sup>2</sup>/<sub>5</sub> = <sup>8</sup>/<sub>20</sub>，<sup>1</sup>/<sub>4</sub> = <sup>5</sup>/<sub>20</sub>，相加 = <sup>13</sup>/<sub>20</sub><br>第二步：買玩具佔的分數 = 1 − <sup>13</sup>/<sub>20</sub> = <sup>7</sup>/<sub>20</sub><br>第三步：買玩具金額 = $200 × <sup>7</sup>/<sub>20</sub> = <strong class="correct-hl">$70</strong>' },
  { id:'wrd8',
    context: '一節課有 60 名學生，其中男生人數是女生的 <sup>2</sup>/<sub>3</sub> 多 6 人。',
    text: '女生有多少人？',
    opts:['30','32','34','36'], ans:3,
    expl:'第一步：設女生為 x，男生 = <sup>2</sup>/<sub>3</sub>x + 6<br>第二步：全班方程：x + <sup>2</sup>/<sub>3</sub>x + 6 = 60<br>即 <sup>5</sup>/<sub>3</sub>x = 54<br>第三步：x = 54 ÷ <sup>5</sup>/<sub>3</sub> = 54 × <sup>3</sup>/<sub>5</sub> = <strong class="correct-hl">36</strong>' },
  { id:'wrd9',
    context: 'Hinson 以 $240 買了一款玩具，加價25%後出售。',
    text: '售價是多少？',
    opts:['$260','$280','$290','$300'], ans:3,
    expl:'第一步：加價 25% 後是成本的 125%：<br>售價 = $240 × 1.25<br>第二步：計算：= <strong class="correct-hl">$300</strong>' },
  { id:'wrd10',
    context: '學校共領取 108 張貼紙，按 3:4:5 分給三個年級。',
    text: '最多的一個年級得多少張？',
    opts:['27','36','45','54'], ans:2,
    expl:'第一步：共 3 + 4 + 5 = 12 份<br>第二步：每份 = 108 ÷ 12 = 9<br>第三步：最多的一份 = 5 份 × 9 = <strong class="correct-hl">45</strong> 張' },
  { id:'wrd11',
    context: '書店把一本書定價提高 25%，售 $75。',
    text: '原定價是多少？',
    opts:['$55','$60','$65','$70'], ans:1,
    expl:'第一步：設原定價為 x，提高 25% 後是 125%：<br>x × 1.25 = 75<br>第二步：兩邊除以 1.25：<br>x = 75 ÷ 1.25 = <strong class="correct-hl">$60</strong>' },
  { id:'wrd12',
    context: '學校遊覽共 180 名學生，男:女 = 7:5。',
    text: '男生比女生多多少人？',
    opts:['20','25','30','35'], ans:2,
    expl:'第一步：共 7 + 5 = 12 份，每份 = 180 ÷ 12 = 15<br>第二步：相差的份數 = 7 − 5 = 2 份<br>第三步：相差人數 = 2 × 15 = <strong class="correct-hl">30</strong> 人' },
  { id:'wrd13',
    context: '長方形魚缸，長 50 cm，寬 30 cm，水深 20 cm。',
    text: '再加入 3 升水（1升=1000 cm³），水深增加多少 cm？',
    opts:['1 cm','2 cm','3 cm','4 cm'], ans:1,
    expl:'第一步：求魚缸底面積：<br>50 × 30 = 1500 cm²<br>第二步：3 升水轉做 cm³：<br>3 × 1000 = 3000 cm³<br>第三步：水深增加 = 水的體積 ÷ 底面積：<br>3000 ÷ 1500 = <strong class="correct-hl">2 cm</strong>' },
  { id:'wrd14',
    context: '一項工程，甲獨做需 10 天，乙獨做需 15 天。',
    text: '兩人合做幾天完成？',
    opts:['5 天','6 天','7 天','8 天'], ans:1,
    expl:'第一步：求甲、乙每日各完成的工作量（效率）：<br>甲 = <sup>1</sup>/<sub>10</sub>，乙 = <sup>1</sup>/<sub>15</sub><br>第二步：合做效率（通分為 30）：<br><sup>3</sup>/<sub>30</sub> + <sup>2</sup>/<sub>30</sub> = <sup>5</sup>/<sub>30</sub> = <sup>1</sup>/<sub>6</sub><br>第三步：合做所需天數 = 1 ÷ <sup>1</sup>/<sub>6</sub> = <strong class="correct-hl">6 天</strong>' },
  { id:'wrd15',
    context: 'HINSON 用零用錢的 <sup>2</sup>/<sub>5</sub> 買文具後，剩下 $36。',
    text: 'HINSON 原有多少零用錢？',
    opts:['$54','$60','$72','$90'], ans:1,
    expl:'第一步：買文具後剩下的分數：<br>1 − <sup>2</sup>/<sub>5</sub> = <sup>3</sup>/<sub>5</sub><br>第二步：<sup>3</sup>/<sub>5</sub> 對應 $36，求全數：<br>36 ÷ <sup>3</sup>/<sub>5</sub> = 36 × <sup>5</sup>/<sub>3</sub> = <strong class="correct-hl">$60</strong>' },
  { id:'wrd16',
    context: '正方形和長方形面積相等，長方形長 18 cm，寬 8 cm。',
    text: '正方形的周長是多少？',
    opts:['36 cm','42 cm','48 cm','54 cm'], ans:2,
    expl:'第一步：求長方形面積：<br>18 × 8 = 144 cm²<br>第二步：正方形面積同樣是 144 cm²，求邊長（開方）：<br>邊長 = 12 cm<br>第三步：周長 = 4 × 12 = <strong class="correct-hl">48 cm</strong>' },
  { id:'wrd17',
    context: '水果店以 $12/kg 買入芒果，以 $15/kg 賣出。',
    text: '利潤率是多少？',
    opts:['20%','25%','30%','40%'], ans:1,
    expl:'第一步：求每公斤利潤：<br>15 − 12 = $3<br>第二步：利潤率 = 利潤 ÷ 成本 × 100%：<br>3 ÷ 12 × 100% = <strong class="correct-hl">25%</strong>' },
  { id:'wrd18',
    context: '甲乙兩地相距 240 km，小明從甲出發速率 60 km/h，小華從乙出發速率 40 km/h，同時相向而行。',
    text: '相遇時小明走了多少 km？',
    opts:['120 km','130 km','140 km','144 km'], ans:3,
    expl:'第一步：合速 = 兩速相加：<br>60 + 40 = 100 km/h<br>第二步：相遇時間 = 總距離 ÷ 合速：<br>240 ÷ 100 = 2.4 小時<br>第三步：小明的路程 = 速率 × 時間：<br>60 × 2.4 = <strong class="correct-hl">144 km</strong>' },
],

/* ─── 數據處理 ─── */
data: [
  { id:'dat1', text:'求以下數據的平均數：8, 12, 15, 9, 11',
    opts:['10','11','12','13'], ans:1,
    expl:'第一步：求總和：<br>8+12+15+9+11 = 55<br>第二步：平均數 = 總和 ÷ 個數：<br>55 ÷ 5 = <strong class="correct-hl">11</strong>' },
  { id:'dat2', text:'求以下數據的中位數：3, 7, 5, 9, 1',
    opts:['5','7','3','6'], ans:0,
    expl:'第一步：由小到大排序：<br>1, 3, 5, 7, 9<br>第二步：共 5 個數，中間（第 3 個）就是中位數：<strong class="correct-hl">5</strong>' },
  { id:'dat3', text:'求以下數據的眾數：4, 7, 4, 9, 4, 7, 4',
    opts:['4','7','9','14'], ans:0,
    expl:'第一步：數清楚每個數出現的次數：<br>4 出現 4 次，7 出現 2 次，9 出現 1 次<br>第二步：出現次數最多的就是眾數：<strong class="correct-hl">4</strong>' },
  { id:'dat4', text:'求以下數據的全距：23, 45, 12, 67, 8',
    opts:['55','59','63','67'], ans:1,
    expl:'第一步：找出最大值和最小值：<br>最大值 = 67，最小值 = 8<br>第二步：全距 = 最大值 − 最小值：<br>67 − 8 = <strong class="correct-hl">59</strong>' },
  { id:'dat5', text:'5 次測驗總分 420，平均分是？',
    opts:['82','83','84','85'], ans:2,
    expl:'第一步：套用公式 平均分 = 總分 ÷ 次數<br>第二步：420 ÷ 5 = <strong class="correct-hl">84</strong>' },
  { id:'dat6', text:'已知 5, 8, a, 6 的平均數是 7，求 a',
    opts:['7','8','9','10'], ans:2,
    expl:'第一步：代入平均數公式：<br>(5+8+a+6) ÷ 4 = 7<br>第二步：兩邊乘 4：<br>19 + a = 28<br>第三步：a = 28 − 19 = <strong class="correct-hl">9</strong>' },
  { id:'dat7', text:'求以下數據的中位數：4, 8, 12, 16',
    opts:['8','9','10','12'], ans:2,
    expl:'第一步：數據已由小到大排好：4, 8, 12, 16<br>第二步：共 4 個數（偶數個），中位數 = 中間兩個數的平均：<br>(8+12) ÷ 2 = <strong class="correct-hl">10</strong>' },
  { id:'dat8', text:'某組成績：60, 70, 80, 90, 100，平均分是？',
    opts:['78','80','82','84'], ans:1,
    expl:'第一步：求總和：<br>60+70+80+90+100 = 400<br>第二步：平均 = 400 ÷ 5 = <strong class="correct-hl">80</strong>' },
  { id:'dat9', text:'10名學生成績：70, 80, 60, 90, 75, 70, 65, 95, 70, 80，眾數是？',
    opts:['65','70','75','80'], ans:1,
    expl:'第一步：數清楚每個分數出現的次數：<br>70 出現 3 次，80 出現 2 次，其餘各出現 1 次<br>第二步：出現次數最多的是眾數：<strong class="correct-hl">70</strong>' },
  { id:'dat10', text:'5名學生平均分 78，加入第 6 名後平均變 80，第 6 名得多少分？',
    opts:['86','88','90','92'], ans:2,
    expl:'第一步：求原本 5 人的總分：<br>78 × 5 = 390<br>第二步：求加入後 6 人的總分：<br>80 × 6 = 480<br>第三步：第 6 名的分數 = 6 人總分 − 5 人總分：<br>480 − 390 = <strong class="correct-hl">90</strong>' },
  { id:'dat11', text:'求數據 15, 8, 23, 11, 19, 7 的中位數',
    opts:['11','13','15','19'], ans:1,
    expl:'第一步：由小到大排序：<br>7, 8, 11, 15, 19, 23<br>第二步：共 6 個數（偶數個），中位數 = 中間兩個數的平均：<br>(11+15) ÷ 2 = <strong class="correct-hl">13</strong>' },
  { id:'dat12', text:'男生 20 人平均 76 分，女生 10 人平均 82 分，全班平均是？',
    opts:['78','78.5','79','79.5'], ans:0,
    expl:'第一步：求男生總分：76 × 20 = 1520<br>第二步：求女生總分：82 × 10 = 820<br>第三步：全班平均 = 全班總分 ÷ 全班人數：<br>(1520+820) ÷ 30 = 2340 ÷ 30 = <strong class="correct-hl">78</strong>' },
  { id:'dat13', text:'圓形圖中，某份佔 72°，代表多少百分比？',
    opts:['15%','18%','20%','25%'], ans:2,
    expl:'第一步：整個圓形代表 360°，求該份佔的分數：<br>72 ÷ 360<br>第二步：化為百分比（乘 100%）：<br>72 ÷ 360 × 100% = <strong class="correct-hl">20%</strong>' },
  { id:'dat14', text:'以下哪組數據的平均數等於中位數？',
    opts:['1, 2, 3, 4, 5','1, 1, 2, 3, 8','2, 2, 3, 5, 8','1, 3, 3, 5, 8'], ans:0,
    expl:'第一步：計算選項 A 的平均數：<br>(1+2+3+4+5) ÷ 5 = 15 ÷ 5 = 3<br>第二步：計算選項 A 的中位數（已排好序，取中間）：3<br>第三步：兩者相等（3 = 3），所以答案是 <strong class="correct-hl">A</strong>' },
  { id:'dat15', text:'甲組資料全距 20，乙組全距 35，哪組資料較分散？',
    opts:['甲組','乙組','兩組一樣','無法比較'], ans:1,
    expl:'第一步：全距代表數據的分散程度，全距越大即越分散<br>第二步：比較兩組全距：35 > 20<br>所以 <strong class="correct-hl">乙組</strong>較分散' },
  { id:'dat16', text:'加入一個新數後，平均數不變，新數必須等於？',
    opts:['最大值','最小值','原來的平均數','中位數'], ans:2,
    expl:'第一步：如果新數等於原來的平均數，加入後總和同個數按比例一齊增加<br>第二步：平均數自然唔會改變，所以新數必須等於 <strong class="correct-hl">原來的平均數</strong>' },
],

/* ─── 呈分試挑戰（TSA 混合難題）─── */
tsa: [
  { id:'tsa1',
    context: '一個長方體水箱，長 50 cm，寬 30 cm，高 40 cm，現裝有 30 cm 深的水。',
    text: '水箱裏有多少升水？（1000 cm³ = 1 升）',
    opts:['40 升','45 升','50 升','60 升'], ans:1,
    expl:'第一步：求水的體積（用水深做「高」，而唔係水箱的高）：<br>50 × 30 × 30 = 45000 cm³<br>第二步：cm³ 轉做升（÷1000）：<br>45000 ÷ 1000 = <strong class="correct-hl">45 升</strong>' },
  { id:'tsa2',
    context: '某商店售出商品 A 和 B，A 每件 $24，B 每件 $36。某天共售出兩款各若干件，總收入 $288。若賣出 B 是 A 的 2 倍。',
    text: '賣出 A 多少件？',
    opts:['3','4','5','6'], ans:0,
    expl:'第一步：設 A 賣出 x 件，B 賣出 2x 件<br>第二步：列出總收入方程：<br>24x + 36(2x) = 288<br>第三步：化簡：24x + 72x = 96x = 288<br>第四步：兩邊除以 96：<br>x = 288 ÷ 96 = <strong class="correct-hl">3</strong>' },
  { id:'tsa3',
    context: '三角形 ABC，∠A = 50°，∠B = 70°。',
    text: '∠C 等於多少度？',
    opts:['50°','60°','70°','80°'], ans:1,
    expl:'第一步：套用三角形內角和 = 180°<br>第二步：∠C = 180° − ∠A − ∠B：<br>180° − 50° − 70° = <strong class="correct-hl">60°</strong>' },
  { id:'tsa4',
    text: '計算：1 + 2 + 3 + … + 50 = ?',
    opts:['1225','1250','1275','1300'], ans:2,
    expl:'第一步：呢個是連續整數 1 到 50 的等差級數<br>第二步：套用公式 總和 = (首項 + 末項) × 項數 ÷ 2：<br>(1 + 50) × 50 ÷ 2<br>第三步：計算：51 × 50 ÷ 2 = 2550 ÷ 2 = <strong class="correct-hl">1275</strong>' },
  { id:'tsa5',
    context: '一張長方形紙，長 20 cm，寬 15 cm，從四角各剪去一個 3 cm 的正方形後折成無蓋箱子。',
    text: '箱子的容積是多少 cm³？',
    opts:['294 cm³','378 cm³','504 cm³','756 cm³'], ans:1,
    expl:'第一步：剪走四角後摺起，箱底的長 = 20 − 2×3 = 14 cm，闊 = 15 − 2×3 = 9 cm<br>第二步：箱的高就是剪走的正方形邊長：3 cm<br>第三步：容積 = 底面積 × 高：<br>14 × 9 × 3 = <strong class="correct-hl">378 cm³</strong>' },
  { id:'tsa6',
    text: '若 3x − 2(x + 5) = 7，求 x',
    opts:['10','15','17','20'], ans:2,
    expl:'第一步：展開括號：<br>3x − 2x − 10 = 7<br>第二步：合併同類項：<br>x − 10 = 7<br>第三步：兩邊加 10：<br>x = 7 + 10 = <strong class="correct-hl">17</strong>' },
  { id:'tsa7',
    context: '甲乙同時從 A 城出發前往 B 城，甲速率 60 km/h，乙速率 45 km/h，AB 兩城相距 180 km。',
    text: '甲到達 B 城後，乙還需多少時間才能到達？',
    opts:['0.5 小時','1 小時','1.5 小時','2 小時'], ans:1,
    expl:'第一步：求甲到達 B 城所需時間：<br>180 ÷ 60 = 3 小時<br>第二步：呢 3 小時內乙行咗多遠：<br>45 × 3 = 135 km<br>第三步：乙仲欠的距離：<br>180 − 135 = 45 km<br>第四步：乙仲需的時間 = 45 ÷ 45 = <strong class="correct-hl">1 小時</strong>' },
  { id:'tsa8',
    context: '一個圓形草坪，直徑 14 m，外圍有 1 m 闊的小路。（π ≈ <sup>22</sup>/<sub>7</sub>）',
    text: '小路的面積是多少 m²？',
    opts:['44 m²','48 m²','50 m²','52 m²'], ans:1,
    expl:'第一步：草坪半徑 = 14 ÷ 2 = 7 m，連小路的外圓半徑 = 7 + 1 = 8 m<br>第二步：外圓面積 = <sup>22</sup>/<sub>7</sub> × 8² = <sup>22</sup>/<sub>7</sub> × 64 ≈ 201.1 m²<br>第三步：草坪（內圓）面積 = <sup>22</sup>/<sub>7</sub> × 7² = 154 m²<br>第四步：小路面積 = 外圓 − 內圓 ≈ 201.1 − 154 = 47.1 m²，最接近的選項是 <strong class="correct-hl">48 m²</strong>' },
  { id:'tsa9',
    text: '一個數的 30% 加上 60 等於這個數的 <sup>3</sup>/<sub>5</sub>，求這個數',
    opts:['150','180','200','240'], ans:2,
    expl:'第一步：設該數為 x，列出方程：<br>0.3x + 60 = 0.6x<br>第二步：將 x 項移到一邊：<br>60 = 0.6x − 0.3x = 0.3x<br>第三步：兩邊除以 0.3：<br>x = 60 ÷ 0.3 = <strong class="correct-hl">200</strong>' },
  { id:'tsa10',
    context: '5 名學生測驗成績：72, 85, 68, 90, x，平均分為 80。',
    text: '求 x',
    opts:['83','85','87','89'], ans:1,
    expl:'第一步：代入平均數公式：<br>(72+85+68+90+x) ÷ 5 = 80<br>第二步：兩邊乘 5：<br>315 + x = 400<br>第三步：x = 400 − 315 = <strong class="correct-hl">85</strong>' },
],

/* ─── 混合速算特訓 ─── */
mental: [
  // ── 1. 11-19 平方 ──
  { id:'mn_sq11', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：11 × 11 = ?',
    ans:'121',
    expl:'技巧：(11+1)×10 + 1² = 12×10 + 1 = <strong class="correct-hl">121</strong>' },
  { id:'mn_sq12', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：12 × 12 = ?',
    ans:'144',
    expl:'技巧：(12+2)×10 + 2² = 14×10 + 4 = <strong class="correct-hl">144</strong>' },
  { id:'mn_sq13', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：13 × 13 = ?',
    ans:'169',
    expl:'技巧：(13+3)×10 + 3² = 16×10 + 9 = <strong class="correct-hl">169</strong>' },
  { id:'mn_sq14', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：14 × 14 = ?',
    ans:'196',
    expl:'技巧：(14+4)×10 + 4² = 18×10 + 16 = <strong class="correct-hl">196</strong>' },
  { id:'mn_sq15', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：15 × 15 = ?',
    ans:'225',
    expl:'技巧：(15+5)×10 + 5² = 20×10 + 25 = <strong class="correct-hl">225</strong>' },
  { id:'mn_sq16', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：16 × 16 = ?',
    ans:'256',
    expl:'技巧：(16+6)×10 + 6² = 22×10 + 36 = <strong class="correct-hl">256</strong>' },
  { id:'mn_sq17', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：17 × 17 = ?',
    ans:'289',
    expl:'技巧：(17+7)×10 + 7² = 24×10 + 49 = <strong class="correct-hl">289</strong>' },
  { id:'mn_sq18', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：18 × 18 = ?',
    ans:'324',
    expl:'技巧：(18+8)×10 + 8² = 26×10 + 64 = <strong class="correct-hl">324</strong>' },
  { id:'mn_sq19', sub:'sq', tag:'🔢 11-19 平方', type:'input',
    text:'速算：19 × 19 = ?',
    ans:'361',
    expl:'技巧：(19+9)×10 + 9² = 28×10 + 81 = <strong class="correct-hl">361</strong>' },

  // ── 2. 2位數進位加減 ──
  { id:'mn_add1', sub:'add', tag:'➕ 進位加法', type:'input',
    text:'速算：47 + 58 = ?', ans:'105',
    expl:'7+8=15（進位），4+5+1=10（再進位），= <strong class="correct-hl">105</strong>' },
  { id:'mn_add2', sub:'add', tag:'➕ 進位加法', type:'input',
    text:'速算：63 + 49 = ?', ans:'112',
    expl:'3+9=12（進位），6+4+1=11，= <strong class="correct-hl">112</strong>' },
  { id:'mn_add3', sub:'add', tag:'➕ 進位加法', type:'input',
    text:'速算：76 + 35 = ?', ans:'111',
    expl:'6+5=11（進位），7+3+1=11，= <strong class="correct-hl">111</strong>' },
  { id:'mn_add4', sub:'add', tag:'➕ 進位加法', type:'input',
    text:'速算：55 + 68 = ?', ans:'123',
    expl:'5+8=13（進位），5+6+1=12，= <strong class="correct-hl">123</strong>' },
  { id:'mn_add5', sub:'add', tag:'➕ 進位加法', type:'input',
    text:'速算：38 + 76 = ?', ans:'114',
    expl:'8+6=14（進位），3+7+1=11，= <strong class="correct-hl">114</strong>' },
  { id:'mn_add6', sub:'add', tag:'➕ 進位加法', type:'input',
    text:'速算：28 + 97 = ?', ans:'125',
    expl:'8+7=15（進位），2+9+1=12，= <strong class="correct-hl">125</strong>' },
  { id:'mn_sub1', sub:'add', tag:'➖ 借位減法', type:'input',
    text:'速算：82 − 47 = ?', ans:'35',
    expl:'2-7需借位，12-7=5；8-1-4=3，= <strong class="correct-hl">35</strong>' },
  { id:'mn_sub2', sub:'add', tag:'➖ 借位減法', type:'input',
    text:'速算：73 − 28 = ?', ans:'45',
    expl:'3-8借位，13-8=5；7-1-2=4，= <strong class="correct-hl">45</strong>' },
  { id:'mn_sub3', sub:'add', tag:'➖ 借位減法', type:'input',
    text:'速算：100 − 63 = ?', ans:'37',
    expl:'100-63：補數法，63需加 <strong class="correct-hl">37</strong> 才到100' },
  { id:'mn_sub4', sub:'add', tag:'➖ 借位減法', type:'input',
    text:'速算：125 − 78 = ?', ans:'47',
    expl:'125-78：5-8借位→15-8=7；2-1-7借位→12-1-7=4；= <strong class="correct-hl">47</strong>' },
  { id:'mn_sub5', sub:'add', tag:'➖ 借位減法', type:'input',
    text:'速算：150 − 93 = ?', ans:'57',
    expl:'150-93=57。技巧：150-100=50，再加 7（因為多減了 7），= <strong class="correct-hl">57</strong>' },

  // ── 3. 2位數 × 1位數 ──
  { id:'mn_mul1', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：47 × 8 = ?', ans:'376',
    expl:'40×8=320，7×8=56，320+56 = <strong class="correct-hl">376</strong>' },
  { id:'mn_mul2', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：63 × 7 = ?', ans:'441',
    expl:'60×7=420，3×7=21，420+21 = <strong class="correct-hl">441</strong>' },
  { id:'mn_mul3', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：85 × 6 = ?', ans:'510',
    expl:'80×6=480，5×6=30，480+30 = <strong class="correct-hl">510</strong>' },
  { id:'mn_mul4', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：24 × 9 = ?', ans:'216',
    expl:'25×9=225，再減9，225-9 = <strong class="correct-hl">216</strong>（湊整法）' },
  { id:'mn_mul5', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：78 × 4 = ?', ans:'312',
    expl:'80×4=320，再減 2×4=8，320-8 = <strong class="correct-hl">312</strong>' },
  { id:'mn_mul6', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：56 × 8 = ?', ans:'448',
    expl:'50×8=400，6×8=48，400+48 = <strong class="correct-hl">448</strong>' },
  { id:'mn_mul7', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：93 × 7 = ?', ans:'651',
    expl:'90×7=630，3×7=21，630+21 = <strong class="correct-hl">651</strong>' },
  { id:'mn_mul8', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：37 × 6 = ?', ans:'222',
    expl:'40×6=240，再減 3×6=18，240-18 = <strong class="correct-hl">222</strong>' },
  { id:'mn_mul9', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：64 × 9 = ?', ans:'576',
    expl:'64×10=640，再減 64，640-64 = <strong class="correct-hl">576</strong>' },
  { id:'mn_mul10', sub:'mul', tag:'✖️ 2位×1位', type:'input',
    text:'速算：48 × 7 = ?', ans:'336',
    expl:'50×7=350，再減 2×7=14，350-14 = <strong class="correct-hl">336</strong>' },

  // ── 4. 小數點移位 ──
  { id:'mn_dec1', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：3.6 × 10 = ?', ans:'36',
    expl:'乘10：小數點右移一位，3.6 → <strong class="correct-hl">36</strong>' },
  { id:'mn_dec2', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：4.7 ÷ 10 = ?', ans:'0.47',
    expl:'除10：小數點左移一位，4.7 → <strong class="correct-hl">0.47</strong>' },
  { id:'mn_dec3', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：0.48 × 100 = ?', ans:'48',
    expl:'乘100：小數點右移兩位，0.48 → <strong class="correct-hl">48</strong>' },
  { id:'mn_dec4', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：0.036 × 1000 = ?', ans:'36',
    expl:'乘1000：小數點右移三位，0.036 → <strong class="correct-hl">36</strong>' },
  { id:'mn_dec5', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：12.5 × 100 = ?', ans:'1250',
    expl:'乘100：小數點右移兩位，12.5 → <strong class="correct-hl">1250</strong>' },
  { id:'mn_dec6', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：7.8 ÷ 1000 = ?', ans:'0.0078',
    expl:'除1000：小數點左移三位，7.8 → <strong class="correct-hl">0.0078</strong>' },
  { id:'mn_dec7', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：250 ÷ 1000 = ?', ans:'0.25',
    expl:'除1000：小數點左移三位，250 → <strong class="correct-hl">0.25</strong>' },
  { id:'mn_dec8', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：3.14 × 100 = ?', ans:'314',
    expl:'乘100：小數點右移兩位，3.14 → <strong class="correct-hl">314</strong>' },
  { id:'mn_dec9', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：6.5 ÷ 100 = ?', ans:'0.065',
    expl:'除100：小數點左移兩位，6.5 → <strong class="correct-hl">0.065</strong>' },
  { id:'mn_dec10', sub:'dec', tag:'🔢 小數移位', type:'input',
    text:'速算：5.23 ÷ 100 = ?', ans:'0.0523',
    expl:'除100：小數點左移兩位，5.23 → <strong class="correct-hl">0.0523</strong>' },

  // ── 5. 強配對 ──
  { id:'mn_pair1', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：25 × 4 = ?', ans:'100',
    expl:'牢記：<strong class="correct-hl">25 × 4 = 100</strong>（黃金配對！）' },
  { id:'mn_pair2', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：125 × 8 = ?', ans:'1000',
    expl:'牢記：<strong class="correct-hl">125 × 8 = 1000</strong>（黃金配對！）' },
  { id:'mn_pair3', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：25 × 4 × 9 = ?', ans:'900',
    expl:'先配對：25 × 4 = 100，再 × 9 = <strong class="correct-hl">900</strong>' },
  { id:'mn_pair4', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：125 × 8 × 3 = ?', ans:'3000',
    expl:'先配對：125 × 8 = 1000，再 × 3 = <strong class="correct-hl">3000</strong>' },
  { id:'mn_pair5', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：25 × 16 = ?', ans:'400',
    expl:'25 × 16 = 25 × 4 × 4 = 100 × 4 = <strong class="correct-hl">400</strong>' },
  { id:'mn_pair6', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：125 × 24 = ?', ans:'3000',
    expl:'125 × 24 = 125 × 8 × 3 = 1000 × 3 = <strong class="correct-hl">3000</strong>' },
  { id:'mn_pair7', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：125 × 32 = ?', ans:'4000',
    expl:'125 × 32 = 125 × 8 × 4 = 1000 × 4 = <strong class="correct-hl">4000</strong>' },
  { id:'mn_pair8', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：25 × 4 × 125 × 8 = ?', ans:'100000',
    expl:'分組：(25×4) × (125×8) = 100 × 1000 = <strong class="correct-hl">100000</strong>' },
  { id:'mn_pair9', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：25 × 40 = ?', ans:'1000',
    expl:'25 × 40 = 25 × 4 × 10 = 100 × 10 = <strong class="correct-hl">1000</strong>' },
  { id:'mn_pair10', sub:'pair', tag:'🔗 強配對', type:'input',
    text:'配對速算：125 × 8 × 5 × 4 = ?', ans:'20000',
    expl:'(125×8) × (5×4) = 1000 × 20 = <strong class="correct-hl">20000</strong>' },

  // ── 6. 快拆轉換 ──
  { id:'mn_cv1', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：<sup>1</sup>/<sub>4</sub> 化成小數 = ?', ans:'0.25',
    expl:'1 ÷ 4 = <strong class="correct-hl">0.25</strong>（記住：<sup>1</sup>/<sub>4</sub> = 0.25）' },
  { id:'mn_cv2', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：<sup>3</sup>/<sub>4</sub> 化成小數 = ?', ans:'0.75',
    expl:'3 ÷ 4 = <strong class="correct-hl">0.75</strong>（記住：<sup>3</sup>/<sub>4</sub> = 0.75）' },
  { id:'mn_cv3', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：<sup>1</sup>/<sub>8</sub> 化成小數 = ?', ans:'0.125',
    expl:'1 ÷ 8 = <strong class="correct-hl">0.125</strong>（記住：<sup>1</sup>/<sub>8</sub> = 0.125）' },
  { id:'mn_cv4', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：<sup>3</sup>/<sub>8</sub> 化成小數 = ?', ans:'0.375',
    expl:'3 ÷ 8 = 0.125 × 3 = <strong class="correct-hl">0.375</strong>' },
  { id:'mn_cv5', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：0.25 化成百分率 = ?%（只填數字）', ans:'25',
    expl:'0.25 × 100% = <strong class="correct-hl">25</strong>%' },
  { id:'mn_cv6', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：0.375 化成百分率 = ?%（只填數字）', ans:'37.5',
    expl:'0.375 × 100% = <strong class="correct-hl">37.5</strong>%' },
  { id:'mn_cv7', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：25% 化成最簡分數（用 a/b 格式）', ans:'1/4',
    expl:'25% = <sup>25</sup>/<sub>100</sub> = <strong class="correct-hl"><sup>1</sup>/<sub>4</sub></strong>' },
  { id:'mn_cv8', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：75% 化成最簡分數（用 a/b 格式）', ans:'3/4',
    expl:'75% = <sup>75</sup>/<sub>100</sub> = <strong class="correct-hl"><sup>3</sup>/<sub>4</sub></strong>' },
  { id:'mn_cv9', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：0.6 化成最簡分數（用 a/b 格式）', ans:'3/5',
    expl:'0.6 = <sup>6</sup>/<sub>10</sub> = <strong class="correct-hl"><sup>3</sup>/<sub>5</sub></strong>' },
  { id:'mn_cv10', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：0.2 化成最簡分數（用 a/b 格式）', ans:'1/5',
    expl:'0.2 = <sup>2</sup>/<sub>10</sub> = <strong class="correct-hl"><sup>1</sup>/<sub>5</sub></strong>' },
  { id:'mn_cv11', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：<sup>5</sup>/<sub>8</sub> 化成小數 = ?', ans:'0.625',
    expl:'<sup>5</sup>/<sub>8</sub> = 0.125 × 5 = <strong class="correct-hl">0.625</strong>' },
  { id:'mn_cv12', sub:'conv', tag:'🔄 快拆轉換', type:'input',
    text:'快拆：0.8 化成百分率 = ?%（只填數字）', ans:'80',
    expl:'0.8 × 100% = <strong class="correct-hl">80</strong>%' },

  // ── 7. 份數思維 ──
  { id:'mn_rt1', sub:'ratio', tag:'🧠 份數思維', type:'input',
    text:'份數速算：甲:乙 = 3:5，甲 = 60，乙 = ?',
    ans:'100',
    expl:'1份 = 60÷3 = 20，乙 = 5×20 = <strong class="correct-hl">100</strong>' },
  { id:'mn_rt2', sub:'ratio', tag:'🧠 份數思維', type:'input',
    text:'份數速算：甲:乙 = 2:7，乙 = 56，甲 = ?',
    ans:'16',
    expl:'1份 = 56÷7 = 8，甲 = 2×8 = <strong class="correct-hl">16</strong>' },
  { id:'mn_rt3', sub:'ratio', tag:'🧠 份數思維', type:'input',
    text:'份數速算：甲:乙 = 5:3，甲比乙多 80，甲 = ?',
    ans:'200',
    expl:'差 = (5-3)份 = 2份 = 80，1份 = 40，甲 = 5×40 = <strong class="correct-hl">200</strong>' },
  { id:'mn_rt4', sub:'ratio', tag:'🧠 份數思維', type:'input',
    text:'份數速算：三量比 1:2:3，總量 = 120，最大一份 = ?',
    ans:'60',
    expl:'共(1+2+3)=6份，1份=20，最大=3×20 = <strong class="correct-hl">60</strong>' },
  { id:'mn_rt5', sub:'ratio', tag:'🧠 份數思維', type:'input',
    text:'工程問題：A獨做 4 天，B獨做 12 天，合做需多少天？',
    ans:'3',
    expl:'合做效率：<sup>1</sup>/<sub>4</sub>+<sup>1</sup>/<sub>12</sub> = <sup>3</sup>/<sub>12</sub>+<sup>1</sup>/<sub>12</sub> = <sup>4</sup>/<sub>12</sub> = <sup>1</sup>/<sub>3</sub>，合做 = <strong class="correct-hl">3</strong> 天' },
  { id:'mn_rt6', sub:'ratio', tag:'🧠 份數思維', type:'input',
    text:'工程問題：A獨做 6 天，B獨做 3 天，合做需多少天？',
    ans:'2',
    expl:'合做效率：<sup>1</sup>/<sub>6</sub>+<sup>1</sup>/<sub>3</sub> = <sup>1</sup>/<sub>6</sub>+<sup>2</sup>/<sub>6</sub> = <sup>3</sup>/<sub>6</sub> = <sup>1</sup>/<sub>2</sub>，合做 = <strong class="correct-hl">2</strong> 天' },
  { id:'mn_rt7', sub:'ratio', tag:'🧠 份數思維', type:'input',
    text:'工程問題：A獨做 8 天，B獨做 12 天，合做需多少天？',
    ans:'4.8',
    expl:'合效率：<sup>1</sup>/<sub>8</sub>+<sup>1</sup>/<sub>12</sub> = <sup>3</sup>/<sub>24</sub>+<sup>2</sup>/<sub>24</sub> = <sup>5</sup>/<sub>24</sub>，合做 = 24÷5 = <strong class="correct-hl">4.8</strong> 天' },
  { id:'mn_rt8', sub:'ratio', tag:'🧠 份數思維', type:'input',
    text:'行程問題：甲速 60 km/h，乙速 90 km/h，甲先出發 1 小時，乙需幾小時追上？',
    ans:'2',
    expl:'甲先走 60 km，追及速率差 = 90-60 = 30 km/h，追上時間 = 60÷30 = <strong class="correct-hl">2</strong> 小時' },
],

/* ─── 混合速算特訓 ─── */
mental: [
  /* ── 1. 11-19 平方 (sub:'sq') ── */
  { id:'m-sq-1',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'11 × 11 = ?',  ans:'121', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 1<br>第二步：100 + 20×1 + 1² = 100 + 20 + 1 = <strong class="correct-hl">121</strong>' },
  { id:'m-sq-2',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'12 × 12 = ?',  ans:'144', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 2<br>第二步：100 + 20×2 + 2² = 100 + 40 + 4 = <strong class="correct-hl">144</strong>' },
  { id:'m-sq-3',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'13 × 13 = ?',  ans:'169', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 3<br>第二步：100 + 20×3 + 3² = 100 + 60 + 9 = <strong class="correct-hl">169</strong>' },
  { id:'m-sq-4',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'14 × 14 = ?',  ans:'196', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 4<br>第二步：100 + 20×4 + 4² = 100 + 80 + 16 = <strong class="correct-hl">196</strong>' },
  { id:'m-sq-5',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'15 × 15 = ?',  ans:'225', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 5<br>第二步：100 + 20×5 + 5² = 100 + 100 + 25 = <strong class="correct-hl">225</strong>' },
  { id:'m-sq-6',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'16 × 16 = ?',  ans:'256', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 6<br>第二步：100 + 20×6 + 6² = 100 + 120 + 36 = <strong class="correct-hl">256</strong>' },
  { id:'m-sq-7',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'17 × 17 = ?',  ans:'289', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 7<br>第二步：100 + 20×7 + 7² = 100 + 140 + 49 = <strong class="correct-hl">289</strong>' },
  { id:'m-sq-8',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'18 × 18 = ?',  ans:'324', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 8<br>第二步：100 + 20×8 + 8² = 100 + 160 + 64 = <strong class="correct-hl">324</strong>' },
  { id:'m-sq-9',  mod:'mental', sub:'sq',   type:'input', tag:'⚡ 11–19平方', text:'19 × 19 = ?',  ans:'361', expl:'第一步：套用公式 (10+a)² = 100 + 20a + a²，呢度 a = 9<br>第二步：100 + 20×9 + 9² = 100 + 180 + 81 = <strong class="correct-hl">361</strong>' },

  /* ── 2. 2位數進位加減 (sub:'add') ── */
  { id:'m-add-1',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'47 + 36 = ?',   ans:'83',  expl:'第一步：先加整十：47 + 30 = 77<br>第二步：再加返個位：77 + 6 = <strong class="correct-hl">83</strong>' },
  { id:'m-add-2',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'65 + 48 = ?',   ans:'113', expl:'第一步：先加整十：65 + 40 = 105<br>第二步：再加個位：105 + 8 = <strong class="correct-hl">113</strong>' },
  { id:'m-add-3',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'83 - 37 = ?',   ans:'46',  expl:'第一步：先減整十：83 − 40 = 43<br>第二步：37 減多咗 3，要加返：43 + 3 = <strong class="correct-hl">46</strong>' },
  { id:'m-add-4',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'74 + 59 = ?',   ans:'133', expl:'第一步：湊整法，將 59 睇成 60：74 + 60 = 134<br>第二步：59 比 60 少 1，要減返：134 − 1 = <strong class="correct-hl">133</strong>' },
  { id:'m-add-5',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'92 - 45 = ?',   ans:'47',  expl:'第一步：先減整十：92 − 50 = 42<br>第二步：45 減多咗 5，要加返：42 + 5 = <strong class="correct-hl">47</strong>' },
  { id:'m-add-6',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'56 + 78 = ?',   ans:'134', expl:'第一步：湊整法，將 78 睇成 80：56 + 80 = 136<br>第二步：78 比 80 少 2，要減返：136 − 2 = <strong class="correct-hl">134</strong>' },
  { id:'m-add-7',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'100 - 63 = ?',  ans:'37',  expl:'第一步：用補數法求 63 的補數：個位 10 − 3 = 7<br>第二步：十位 9 − 6 = 3<br>結果：<strong class="correct-hl">37</strong>' },
  { id:'m-add-8',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'125 + 87 = ?',  ans:'212', expl:'第一步：先加整十：125 + 80 = 205<br>第二步：再加個位：205 + 7 = <strong class="correct-hl">212</strong>' },
  { id:'m-add-9',  mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'200 - 76 = ?',  ans:'124', expl:'第一步：先減整十：200 − 80 = 120<br>第二步：76 減多咗 4，要加返：120 + 4 = <strong class="correct-hl">124</strong>' },
  { id:'m-add-10', mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'67 + 94 = ?',   ans:'161', expl:'第一步：湊整法，將 94 睇成 100：67 + 100 = 167<br>第二步：94 比 100 少 6，要減返：167 − 6 = <strong class="correct-hl">161</strong>' },
  { id:'m-add-11', mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'143 - 58 = ?',  ans:'85',  expl:'第一步：先減整十：143 − 60 = 83<br>第二步：58 減多咗 2，要加返：83 + 2 = <strong class="correct-hl">85</strong>' },
  { id:'m-add-12', mod:'mental', sub:'add', type:'input', tag:'⚡ 進位加減', text:'88 + 76 = ?',   ans:'164', expl:'第一步：湊整法，將 88 睇成 90：90 + 76 = 166<br>第二步：88 比 90 少 2，要減返：166 − 2 = <strong class="correct-hl">164</strong>' },

  /* ── 3. 2位數×1位數 (sub:'mul') ── */
  { id:'m-mul-1',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'37 × 4 = ?',    ans:'148', expl:'第一步：拆開 37 = 30 + 7<br>第二步：30×4 = 120，7×4 = 28<br>相加：120 + 28 = <strong class="correct-hl">148</strong>' },
  { id:'m-mul-2',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'46 × 7 = ?',    ans:'322', expl:'第一步：拆開 46 = 40 + 6<br>第二步：40×7 = 280，6×7 = 42<br>相加：280 + 42 = <strong class="correct-hl">322</strong>' },
  { id:'m-mul-3',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'58 × 6 = ?',    ans:'348', expl:'第一步：58 接近 60，先算 60×6 = 360<br>第二步：58 比 60 少 2，多計咗 2×6 = 12，要減返：360 − 12 = <strong class="correct-hl">348</strong>' },
  { id:'m-mul-4',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'29 × 8 = ?',    ans:'232', expl:'第一步：29 = 30 − 1<br>第二步：30×8 = 240，1×8 = 8<br>240 − 8 = <strong class="correct-hl">232</strong>' },
  { id:'m-mul-5',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'73 × 5 = ?',    ans:'365', expl:'第一步：乘 5 等於「除 2 再乘 10」：73 ÷ 2 = 36.5<br>第二步：36.5 × 10 = <strong class="correct-hl">365</strong>' },
  { id:'m-mul-6',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'84 × 9 = ?',    ans:'756', expl:'第一步：乘 9 等於「乘 10 再減本身」：84 × 10 = 840<br>第二步：840 − 84 = <strong class="correct-hl">756</strong>' },
  { id:'m-mul-7',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'65 × 3 = ?',    ans:'195', expl:'第一步：拆開 65 = 60 + 5<br>第二步：60×3 = 180，5×3 = 15<br>相加：180 + 15 = <strong class="correct-hl">195</strong>' },
  { id:'m-mul-8',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'47 × 6 = ?',    ans:'282', expl:'第一步：47 接近 50，先算 50×6 = 300<br>第二步：47 比 50 少 3，多計咗 3×6 = 18，要減返：300 − 18 = <strong class="correct-hl">282</strong>' },
  { id:'m-mul-9',  mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'96 × 4 = ?',    ans:'384', expl:'第一步：96 接近 100，先算 100×4 = 400<br>第二步：96 比 100 少 4，多計咗 4×4 = 16，要減返：400 − 16 = <strong class="correct-hl">384</strong>' },
  { id:'m-mul-10', mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'78 × 5 = ?',    ans:'390', expl:'第一步：乘 5 等於「除 2 再乘 10」：78 ÷ 2 = 39<br>第二步：39 × 10 = <strong class="correct-hl">390</strong>' },
  { id:'m-mul-11', mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'53 × 7 = ?',    ans:'371', expl:'第一步：拆開 53 = 50 + 3<br>第二步：50×7 = 350，3×7 = 21<br>相加：350 + 21 = <strong class="correct-hl">371</strong>' },
  { id:'m-mul-12', mod:'mental', sub:'mul', type:'input', tag:'⚡ 乘法速算', text:'69 × 8 = ?',    ans:'552', expl:'第一步：69 接近 70，先算 70×8 = 560<br>第二步：69 比 70 少 1，多計咗 1×8 = 8，要減返：560 − 8 = <strong class="correct-hl">552</strong>' },

  /* ── 4. 小數點移位 (sub:'dec') ── */
  { id:'m-dec-1',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'3.6 × 10 = ?',   ans:'36',   expl:'乘 10：小數點向右移 1 位<br>3.6 → <strong class="correct-hl">36</strong>' },
  { id:'m-dec-2',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'0.48 × 100 = ?', ans:'48',   expl:'乘 100：小數點向右移 2 位<br>0.48 → <strong class="correct-hl">48</strong>' },
  { id:'m-dec-3',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'720 ÷ 1000 = ?', ans:'0.72', expl:'除 1000：小數點向左移 3 位<br>720 → 0.720 = <strong class="correct-hl">0.72</strong>' },
  { id:'m-dec-4',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'5.04 × 1000 = ?', ans:'5040', expl:'乘 1000：小數點向右移 3 位<br>5.04 → <strong class="correct-hl">5040</strong>' },
  { id:'m-dec-5',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'0.07 × 100 = ?',  ans:'7',    expl:'乘 100：小數點向右移 2 位<br>0.07 → <strong class="correct-hl">7</strong>' },
  { id:'m-dec-6',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'4.5 ÷ 10 = ?',    ans:'0.45', expl:'除 10：小數點向左移 1 位<br>4.5 → <strong class="correct-hl">0.45</strong>' },
  { id:'m-dec-7',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'0.009 × 1000 = ?', ans:'9',   expl:'乘 1000：小數點向右移 3 位<br>0.009 → <strong class="correct-hl">9</strong>' },
  { id:'m-dec-8',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'63 ÷ 100 = ?',    ans:'0.63', expl:'除 100：小數點向左移 2 位<br>63 → <strong class="correct-hl">0.63</strong>' },
  { id:'m-dec-9',  mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'0.085 × 10 = ?',  ans:'0.85', expl:'乘 10：小數點向右移 1 位<br>0.085 → <strong class="correct-hl">0.85</strong>' },
  { id:'m-dec-10', mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'2500 ÷ 1000 = ?', ans:'2.5',  expl:'除 1000：小數點向左移 3 位<br>2500 → <strong class="correct-hl">2.5</strong>' },
  { id:'m-dec-11', mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'1.23 × 100 = ?',  ans:'123',  expl:'乘 100：小數點向右移 2 位<br>1.23 → <strong class="correct-hl">123</strong>' },
  { id:'m-dec-12', mod:'mental', sub:'dec', type:'input', tag:'⚡ 移位計算', text:'0.6 ÷ 100 = ?',   ans:'0.006',expl:'除 100：小數點向左移 2 位<br>0.6 → <strong class="correct-hl">0.006</strong>' },

  /* ── 5. 強配對 (sub:'pair') ── */
  { id:'m-pair-1',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'25 × 4 = ?',          ans:'100',  expl:'25 × 4 = <strong class="correct-hl">100</strong>，呢個係常用嘅「百配對」，好應該背熟！' },
  { id:'m-pair-2',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'125 × 8 = ?',         ans:'1000', expl:'125 × 8 = <strong class="correct-hl">1000</strong>，呢個係常用嘅「千配對」，好應該背熟！' },
  { id:'m-pair-3',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'25 × 4 × 7 = ?',      ans:'700',  expl:'第一步：先用配對 25×4 = 100<br>第二步：100 × 7 = <strong class="correct-hl">700</strong>' },
  { id:'m-pair-4',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'125 × 8 × 4 = ?',     ans:'4000', expl:'第一步：先用配對 125×8 = 1000<br>第二步：1000 × 4 = <strong class="correct-hl">4000</strong>' },
  { id:'m-pair-5',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'5 × 37 × 2 = ?',      ans:'370',  expl:'第一步：交換次序，抽走 5 同 2 先乘：5×2 = 10<br>第二步：10 × 37 = <strong class="correct-hl">370</strong>' },
  { id:'m-pair-6',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'4 × 9 × 25 = ?',      ans:'900',  expl:'第一步：交換次序，抽走 4 同 25 先乘：4×25 = 100<br>第二步：100 × 9 = <strong class="correct-hl">900</strong>' },
  { id:'m-pair-7',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'8 × 125 × 3 = ?',     ans:'3000', expl:'第一步：先用配對 8×125 = 1000<br>第二步：1000 × 3 = <strong class="correct-hl">3000</strong>' },
  { id:'m-pair-8',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'50 × 7 × 2 = ?',      ans:'700',  expl:'第一步：交換次序，抽走 50 同 2 先乘：50×2 = 100<br>第二步：100 × 7 = <strong class="correct-hl">700</strong>' },
  { id:'m-pair-9',  mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'25 × 12 = ?',          ans:'300',  expl:'第一步：將 12 拆做 4 × 3<br>第二步：25×4 = 100，再 100 × 3 = <strong class="correct-hl">300</strong>' },
  { id:'m-pair-10', mod:'mental', sub:'pair', type:'input', tag:'⚡ 強配對', text:'125 × 16 = ?',         ans:'2000', expl:'第一步：將 16 拆做 8 × 2<br>第二步：125×8 = 1000，再 1000 × 2 = <strong class="correct-hl">2000</strong>' },

  /* ── 6. 快拆轉換 (sub:'conv') ── */
  { id:'m-conv-1',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'50% 等於分數？（化最簡分數，格式：a/b）',         ans:'1/2',   expl:'第一步：50% 即係 <sup>50</sup>/<sub>100</sub><br>第二步：分子分母同除 50，化簡得 <strong class="correct-hl"><sup>1</sup>/<sub>2</sub></strong>' },
  { id:'m-conv-2',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'25% 等於小數？',                                   ans:'0.25',  expl:'第一步：25% 即係 <sup>25</sup>/<sub>100</sub><br>第二步：化為小數 = <strong class="correct-hl">0.25</strong>' },
  { id:'m-conv-3',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'<sup>3</sup>/<sub>4</sub> 等於百分比？（填數字，如 75 代表 75%）', ans:'75', expl:'第一步：先化為小數：3 ÷ 4 = 0.75<br>第二步：化為百分比（乘 100）：<strong class="correct-hl">75</strong>%' },
  { id:'m-conv-4',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'0.6 等於分數？（化最簡，格式：a/b）',              ans:'3/5',   expl:'第一步：0.6 = <sup>6</sup>/<sub>10</sub><br>第二步：分子分母同除 2，化簡得 <strong class="correct-hl"><sup>3</sup>/<sub>5</sub></strong>' },
  { id:'m-conv-5',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'20% 等於分數？（化最簡，格式：a/b）',              ans:'1/5',   expl:'第一步：20% 即係 <sup>20</sup>/<sub>100</sub><br>第二步：分子分母同除 20，化簡得 <strong class="correct-hl"><sup>1</sup>/<sub>5</sub></strong>' },
  { id:'m-conv-6',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'<sup>1</sup>/<sub>8</sub> 等於小數？',             ans:'0.125', expl:'第一步：分子分母同乘 125，變做 <sup>125</sup>/<sub>1000</sub><br>第二步：即係 <strong class="correct-hl">0.125</strong>' },
  { id:'m-conv-7',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'75% 等於分數？（化最簡，格式：a/b）',              ans:'3/4',   expl:'第一步：75% 即係 <sup>75</sup>/<sub>100</sub><br>第二步：分子分母同除 25，化簡得 <strong class="correct-hl"><sup>3</sup>/<sub>4</sub></strong>' },
  { id:'m-conv-8',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'0.375 等於分數？（格式：a/b）',                    ans:'3/8',   expl:'第一步：0.375 = <sup>375</sup>/<sub>1000</sub><br>第二步：分子分母同除 125，化簡得 <strong class="correct-hl"><sup>3</sup>/<sub>8</sub></strong>' },
  { id:'m-conv-9',  mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'<sup>2</sup>/<sub>5</sub> 等於百分比？（填數字）', ans:'40',    expl:'第一步：<sup>2</sup>/<sub>5</sub> = <sup>4</sup>/<sub>10</sub> = 0.4<br>第二步：化為百分比：<strong class="correct-hl">40</strong>%' },
  { id:'m-conv-10', mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'0.125 等於百分比？（填數字）',                     ans:'12.5',  expl:'小數轉百分比，兩邊乘 100：<br>0.125 × 100 = <strong class="correct-hl">12.5</strong>%' },
  { id:'m-conv-11', mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'<sup>1</sup>/<sub>3</sub> 大約等於百分比？（保留整數）', ans:'33', expl:'第一步：<sup>1</sup>/<sub>3</sub> 化為小數 ≈ 0.333…<br>第二步：化為百分比並取整數：<strong class="correct-hl">33</strong>%' },
  { id:'m-conv-12', mod:'mental', sub:'conv', type:'input', tag:'⚡ 快拆轉換', text:'12.5% 等於分數？（化最簡，格式：a/b）',            ans:'1/8',   expl:'第一步：12.5% = <sup>12.5</sup>/<sub>100</sub><br>第二步：分子分母同乘 2，化走小數：<sup>25</sup>/<sub>200</sub><br>第三步：化簡（同除25）得 <strong class="correct-hl"><sup>1</sup>/<sub>8</sub></strong>' },

  /* ── 7. 份數思維 / Ratio Units (sub:'ratio') ── */
  { id:'m-ratio-1', mod:'mental', sub:'ratio', type:'input', tag:'⚡ 份數思維',
    text:'甲乙速度比 = 3:2，甲走完全程需 2 小時，乙需要多少小時？',
    ans:'3', expl:'第一步：路程相同時，速度和時間成反比：速度比 3:2 → 時間比 2:3<br>第二步：甲的 2 小時對應「2」，求乙對應的「3」：<br>2 ÷ 2 × 3 = <strong class="correct-hl">3</strong> 小時' },
  { id:'m-ratio-2', mod:'mental', sub:'ratio', type:'input', tag:'⚡ 份數思維',
    text:'一項工程，甲單獨做需 6 天，乙單獨做需 12 天。兩人合做需幾天？',
    ans:'4', expl:'第一步：甲效率 = <sup>1</sup>/<sub>6</sub>，乙效率 = <sup>1</sup>/<sub>12</sub><br>第二步：合力效率（通分為 12）= <sup>2</sup>/<sub>12</sub> + <sup>1</sup>/<sub>12</sub> = <sup>3</sup>/<sub>12</sub> = <sup>1</sup>/<sub>4</sub><br>第三步：合做所需天數 = 1 ÷ <sup>1</sup>/<sub>4</sub> = <strong class="correct-hl">4</strong> 天' },
  { id:'m-ratio-3', mod:'mental', sub:'ratio', type:'input', tag:'⚡ 份數思維',
    text:'甲：乙 = 5：3，甲比乙多 40，甲是多少？',
    ans:'100', expl:'第一步：份數差 = 5 − 3 = 2 份，對應 40<br>第二步：每份 = 40 ÷ 2 = 20<br>第三步：甲 = 5 份 × 20 = <strong class="correct-hl">100</strong>' },
  { id:'m-ratio-4', mod:'mental', sub:'ratio', type:'input', tag:'⚡ 份數思維',
    text:'工程問題：甲 4 天完成，乙 6 天完成，合做幾天完成？',
    ans:'2.4', expl:'第一步：合力效率（通分為 12）= <sup>3</sup>/<sub>12</sub> + <sup>2</sup>/<sub>12</sub> = <sup>5</sup>/<sub>12</sub><br>第二步：合做所需天數 = 1 ÷ <sup>5</sup>/<sub>12</sub> = <sup>12</sup>/<sub>5</sub> = <strong class="correct-hl">2.4</strong> 天' },
  { id:'m-ratio-5', mod:'mental', sub:'ratio', type:'input', tag:'⚡ 份數思維',
    text:'A 和 B 的比例是 2:5，合共 140，A 是多少？',
    ans:'40', expl:'第一步：共 2 + 5 = 7 份<br>第二步：每份 = 140 ÷ 7 = 20<br>第三步：A = 2 份 × 20 = <strong class="correct-hl">40</strong>' },
  { id:'m-ratio-6', mod:'mental', sub:'ratio', type:'input', tag:'⚡ 份數思維',
    text:'行程問題：甲步行速度 4 km/h，乙速度 6 km/h，同一時間出發，1.5 小時後相差多少 km？',
    ans:'3', expl:'第一步：速度差 = 6 − 4 = 2 km/h<br>第二步：1.5 小時後的距離差 = 2 × 1.5 = <strong class="correct-hl">3</strong> km' },
  { id:'m-ratio-7', mod:'mental', sub:'ratio', type:'input', tag:'⚡ 份數思維',
    text:'水缸問題：開一條進水管需 8 小時，開一條出水管需 12 小時，同時開需幾小時注滿？',
    ans:'24', expl:'第一步：進水效率 = <sup>1</sup>/<sub>8</sub>，出水效率 = <sup>1</sup>/<sub>12</sub><br>第二步：淨效率（通分為 24）= <sup>3</sup>/<sub>24</sub> − <sup>2</sup>/<sub>24</sub> = <sup>1</sup>/<sub>24</sub><br>第三步：注滿所需時間 = 1 ÷ <sup>1</sup>/<sub>24</sub> = <strong class="correct-hl">24</strong> 小時' },
  { id:'m-ratio-8', mod:'mental', sub:'ratio', type:'input', tag:'⚡ 份數思維',
    text:'甲乙合做 3 天完成全部工作的一半，照此速度合做全程需幾天？',
    ans:'6', expl:'第一步：3 天完成 <sup>1</sup>/<sub>2</sub>，即每 3 天完成一半工作<br>第二步：全程需時間 = 3 天 × 2 = <strong class="correct-hl">6</strong> 天' },
],

/* ── 小學數學新思維 6上A：小數除法‧小數和分數‧平均數‧折線圖 ── */
book6ua1: [
  // 題型①：移動小數點（例1–6）
  { id:'6u1e01', text:'645 ÷ □ = 0.645，□ 是多少？',
    opts:['10','100','1000','10000'], ans:2,
    expl:'步驟①觀察：645 → 0.645，小數點向左移了 3 位；步驟②向左移 3 位 = ÷1000；步驟③所以 □ = <strong class="correct-hl">1000</strong>' },
  { id:'6u1e02', text:'□ ÷ 0.01 = 370，□ 是多少？',
    opts:['3.7','37','370','3700'], ans:0,
    expl:'步驟①÷0.01 等同 ×100（除以更小的數，結果更大）；步驟②由 □÷0.01=370 → □=370÷100；步驟③= <strong class="correct-hl">3.7</strong>' },
  { id:'6u1e03', text:'4.03 ÷ □ = 0.403，□ 是多少？',
    opts:['0.1','10','100','1000'], ans:1,
    expl:'步驟①觀察：4.03→0.403，小數點向左移了 1 位；步驟②向左移 1 位 = ÷10；步驟③所以 □ = <strong class="correct-hl">10</strong>' },
  { id:'6u1e04', text:'2.8 × □ = 280，□ 是多少？',
    opts:['10','100','1000','10000'], ans:1,
    expl:'步驟①觀察：2.8→280，小數點向右移了 2 位；步驟②向右移 2 位 = ×100；步驟③所以 □ = <strong class="correct-hl">100</strong>' },
  { id:'6u1e05', text:'□ ÷ 0.001 = 560，□ 是多少？',
    opts:['0.056','0.56','5.6','56'], ans:1,
    expl:'步驟①÷0.001 等同 ×1000（口訣：除以分之一 = 乘以整數）；步驟②由 □÷0.001=560 → □=560÷1000；步驟③= <strong class="correct-hl">0.56</strong>' },
  { id:'6ua05', text:'比較 0.6 ÷ 0.001 和 60 ÷ 0.1，哪個較大？',
    opts:['0.6 ÷ 0.001 較大','60 ÷ 0.1 較大','兩者相等','無法比較'], ans:2,
    expl:'步驟①計算左邊：0.6÷0.001=0.6×1000=600；步驟②計算右邊：60÷0.1=60×10=600；步驟③兩邊均=600 → <strong class="correct-hl">兩者相等</strong>' },
  // 題型②：餘數應用（例1–5）
  { id:'6ua06', text:'余先生有 $30，每卷膠紙 $4.7，最多可買幾卷？',
    opts:['5卷','6卷','7卷','8卷'], ans:1,
    expl:'步驟①計算：30÷4.7=6 餘 1.8；步驟②余數解讀：「最多可買」→ 餘數捨去（買不了零散的卷）；步驟③答 = <strong class="correct-hl">6 卷</strong>' },
  { id:'6u1e06', text:'于班想用 0.65 米的正方形紙鋪滿 2.1 米長的告示板，最少需要多少張？',
    opts:['3張','4張','5張','6張'], ans:1,
    expl:'步驟①計算：2.1÷0.65=3 餘 0.15；步驟②余數解讀：「最少需要多少張」→ 有餘須進一（剩 0.15 米也需一張紙才鋪滿）；步驟③答 = <strong class="correct-hl">4 張</strong>' },
  { id:'6u1e07', text:'一條繩子長 7.4 米，剪成每段 1.8 米，最多可剪幾段？',
    opts:['3段','4段','5段','6段'], ans:1,
    expl:'步驟①計算：7.4÷1.8=4 餘 0.2；步驟②余數解讀：「最多可剪」→ 餘數捨去（剩 0.2 米不夠 1.8 米，剪不成整段）；步驟③答 = <strong class="correct-hl">4 段</strong>，剩 0.2 米' },
  { id:'6ua07', text:'用 4.5 公升油漆，每桶裝 0.7 公升，最少要買多少桶？',
    opts:['6桶','7桶','8桶','9桶'], ans:1,
    expl:'步驟①計算：4.5÷0.7=6 餘 0.3；步驟②余數解讀：「最少要買」→ 有餘須進一（最後 0.3 公升也需要整桶才裝得下）；步驟③答 = <strong class="correct-hl">7 桶</strong>' },
  { id:'6u1e08', text:'班主任有 22.5 元，每張貼紙 0.8 元，最多買幾張貼紙？',
    opts:['26張','27張','28張','29張'], ans:2,
    expl:'步驟①計算：22.5÷0.8=28 餘 0.1；步驟②余數解讀：「最多買」→ 餘數捨去（剩 0.1 元不夠再買一張）；步驟③答 = <strong class="correct-hl">28 張</strong>，找回 0.1 元' },
  // 題型③：四則混合估算（例1–5）
  { id:'6u1e09', text:'家欣原有 96 元，買了菊花茶 3 排（每排 19.8 元），以下哪個估算算式最適合？',
    opts:['100 − 20 × 3','96 − 20 × 3','100 − 19.8 × 3','96 − 19.8 × 3'], ans:0,
    expl:'步驟①估算原則：將數字捨入至最接近的整十；步驟②96 ≈ 100，19.8 ≈ 20（兩者均向上取整）；步驟③最簡便算式 = <strong class="correct-hl">100 − 20 × 3</strong>（注意：先乘後減）' },
  { id:'6u1e10', text:'以下哪道算式的答案與 2.7 × 0.08 + 0.7 × 0.08 相同？',
    opts:['3.4 × 0.08','3.4 × 0.16','2.7 × 0.16','2 × 0.08'], ans:0,
    expl:'步驟①識別：兩項都有公因數 0.08；步驟②套用分配律（提取公因數）：2.7×0.08+0.7×0.08=(2.7+0.7)×0.08；步驟③= <strong class="correct-hl">3.4 × 0.08</strong>' },
  { id:'6u1e11', text:'不計算，35.7 ÷ 8.9 最接近哪個整數？',
    opts:['3','4','5','6'], ans:1,
    expl:'步驟①估算技巧：分別調整被除數和除數至近似整數；步驟②35.7≈36，8.9≈9；步驟③估算：36÷9 = <strong class="correct-hl">4</strong>（兩數微調方向相同，誤差互相抵消）' },
  { id:'6u1e12', text:'計算 0.125 × 3.2 × 8 = ?',
    opts:['0.32','3.2','32','320'], ans:1,
    expl:'步驟①識別：0.125 和 8 是互補因數（0.125×8=1）；步驟②利用交換律，先算：0.125×8=1；步驟③再算：1×3.2 = <strong class="correct-hl">3.2</strong>' },
  { id:'6ua10', text:'估算 6.84 × 4.97 最接近哪個答案？',
    opts:['28','34','35','42'], ans:2,
    expl:'步驟①估算策略：捨入至整數；步驟②6.84≈7，4.97≈5；步驟③估算：7×5 = <strong class="correct-hl">35</strong>' },
  // 題型④：多步驟應用（例1–4）
  { id:'6u1e13', text:'一個蛋糕重 0.94 kg，一打西餅（12件）共重 0.84 kg，一件西餅比一個蛋糕輕多少 kg？',
    opts:['0.77 kg','0.87 kg','0.97 kg','1.07 kg'], ans:1,
    expl:'步驟①求每件西餅重量：0.84÷12=0.07 kg；步驟②求差距：蛋糕−西餅=0.94−0.07 = <strong class="correct-hl">0.87 kg</strong>' },
  { id:'6u1e14', text:'麵包師傅每天用 12.5 kg 麵粉，每袋 2.5 kg，3 天共需多少袋麵粉？',
    opts:['10袋','12袋','15袋','18袋'], ans:2,
    expl:'步驟①求每天需要袋數：12.5÷2.5=5 袋；步驟②3 天所需：5×3 = <strong class="correct-hl">15 袋</strong>' },
  { id:'6ua09', text:'王太太買 4 個橙共 $12.8，劉先生買 7 個橙需付多少元？',
    opts:['$19.6','$22.4','$25.6','$28.0'], ans:1,
    expl:'步驟①求每個橙單價：12.8÷4=$3.2；步驟②7個橙費用：3.2×7 = <strong class="correct-hl">$22.4</strong>' },
  { id:'6u1e15', text:'手機售價 1560 元，分 10 期付清，每期付多少元？',
    opts:['106元','126元','156元','196元'], ans:2,
    expl:'步驟①分期付款公式：每期=售價÷期數；步驟②代入：1560÷10 = <strong class="correct-hl">156 元</strong>' },
  // 練習題 Q1、Q2、Q6
  { id:'6ua01', text:'6.2 ÷ 0.1 = ?',
    opts:['0.062','6.2','62','620'], ans:2,
    expl:'步驟①÷0.1 等同 ×10（口訣：除以 0.1 即乘以 10）；步驟②小數點右移 1 位：6.2→62；步驟③= <strong class="correct-hl">62</strong>' },
  { id:'6ua02', text:'3.2 ÷ 1000 = ?',
    opts:['0.032','0.0032','3.2','32000'], ans:1,
    expl:'步驟①÷1000，小數點左移 3 位；步驟②3.2=3.200→移 3 位→0.0032；步驟③= <strong class="correct-hl">0.0032</strong>' },
  { id:'6ua03', text:'0.48 ÷ 0.001 = ?',
    opts:['4.8','48','480','4800'], ans:2,
    expl:'步驟①÷0.001 等同 ×1000（除以更小的數，結果更大）；步驟②小數點右移 3 位：0.48→480；步驟③= <strong class="correct-hl">480</strong>' },
  { id:'6ua04', text:'以下哪道算式的答案最大？',
    opts:['A：18 ÷ 0.01','B：1.8 ÷ 0.1','C：18 ÷ 10','D：180 ÷ 1000'], ans:0,
    expl:'步驟①逐個計算：A=18÷0.01=1800；B=1.8÷0.1=18；C=18÷10=1.8；D=180÷1000=0.18；步驟②比較；步驟③最大 = <strong class="correct-hl">A（1800）</strong>' },
  { id:'6ua08', text:'計算：95 ÷ 1.9 × 5.2 − 260 = ?',
    opts:['0','26','260','520'], ans:0,
    expl:'步驟①按四則運算從左至右：95÷1.9（分子分母同×10）=950÷19=50；步驟②50×5.2=260；步驟③260−260 = <strong class="correct-hl">0</strong>' },
],

book6ua2: [
  // 題型①：小數化最簡分數（例1–6）
  { id:'6u2e01', text:'0.55 化為最簡分數',
    opts:['<sup>1</sup>/<sub>2</sub>','<sup>11</sup>/<sub>20</sub>','<sup>55</sup>/<sub>100</sub>','<sup>11</sup>/<sub>25</sub>'], ans:1,
    expl:'步驟①小數轉分數：0.55=<sup>55</sup>/<sub>100</sub>；步驟②求最大公因數：55和100的GCF=5；步驟③÷5化最簡：= <strong class="correct-hl"><sup>11</sup>/<sub>20</sub></strong>' },
  { id:'6ua12', text:'4.875 化為最簡帶分數',
    opts:['4<sup>3</sup>/<sub>4</sub>','4<sup>7</sup>/<sub>8</sub>','4<sup>7</sup>/<sub>10</sub>','4<sup>9</sup>/<sub>10</sub>'], ans:1,
    expl:'步驟①分整數和小數：整數=4，小數=0.875；步驟②0.875=<sup>875</sup>/<sub>1000</sub>；步驟③化最簡（÷125）=<sup>7</sup>/<sub>8</sub>；步驟④答 = <strong class="correct-hl">4<sup>7</sup>/<sub>8</sub></strong>' },
  { id:'6u2e02', text:'1.42 化為最簡帶分數',
    opts:['1<sup>21</sup>/<sub>50</sub>','1<sup>42</sup>/<sub>100</sub>','1<sup>2</sup>/<sub>5</sub>','1<sup>4</sup>/<sub>10</sub>'], ans:0,
    expl:'步驟①分整數和小數：整數=1，小數=0.42；步驟②0.42=<sup>42</sup>/<sub>100</sub>；步驟③化最簡（÷2）=<sup>21</sup>/<sub>50</sub>；步驟④答 = <strong class="correct-hl">1<sup>21</sup>/<sub>50</sub></strong>' },
  { id:'6u2e03', text:'0.36 化為最簡分數',
    opts:['<sup>9</sup>/<sub>25</sub>','<sup>36</sup>/<sub>100</sub>','<sup>18</sup>/<sub>50</sub>','<sup>3</sup>/<sub>10</sub>'], ans:0,
    expl:'步驟①小數轉分數：0.36=<sup>36</sup>/<sub>100</sub>；步驟②求GCF：36和100的最大公因數=4；步驟③÷4化最簡：= <strong class="correct-hl"><sup>9</sup>/<sub>25</sub></strong>' },
  { id:'6u2e04', text:'3.075 化為最簡帶分數',
    opts:['3<sup>3</sup>/<sub>40</sub>','3<sup>7</sup>/<sub>100</sub>','3<sup>75</sup>/<sub>1000</sub>','3<sup>3</sup>/<sub>20</sub>'], ans:0,
    expl:'步驟①分整數和小數：整數=3，小數=0.075；步驟②0.075=<sup>75</sup>/<sub>1000</sub>；步驟③化最簡（÷25）=<sup>3</sup>/<sub>40</sub>；步驟④答 = <strong class="correct-hl">3<sup>3</sup>/<sub>40</sub></strong>' },
  { id:'6u2e05', text:'0.6 化為最簡分數（注意必須化至最簡！）',
    opts:['<sup>6</sup>/<sub>10</sub>','<sup>3</sup>/<sub>4</sub>','<sup>3</sup>/<sub>5</sub>','<sup>2</sup>/<sub>3</sub>'], ans:2,
    expl:'步驟①小數轉分數：0.6=<sup>6</sup>/<sub>10</sub>；步驟②化最簡（÷2）=<strong class="correct-hl"><sup>3</sup>/<sub>5</sub></strong>；步驟③陷阱：<sup>6</sup>/<sub>10</sub> 未化至最簡，考試會扣分！' },
  // 題型②：分數化小數近似值（例1–5）
  { id:'6ua13', text:'<sup>2</sup>/<sub>7</sub> 取至百分位的近似值是？',
    opts:['0.27','0.28','0.29','0.30'], ans:2,
    expl:'步驟①做除法：2÷7=0.2857...；步驟②「取至百分位」=保留小數 2 位，看千分位（第 3 位）；步驟③千分位=5 → 進一，百分位 8 變 9；步驟④= <strong class="correct-hl">0.29</strong>' },
  { id:'6u2e06', text:'11<sup>4</sup>/<sub>19</sub> 取至十分位的近似值是？',
    opts:['11.1','11.2','11.3','11.4'], ans:1,
    expl:'步驟①做除法：4÷19=0.210...，帶入：11.210...；步驟②「取至十分位」看百分位（第 2 位）；步驟③百分位=1<5 → 捨去；步驟④= <strong class="correct-hl">11.2</strong>' },
  { id:'6u2e07', text:'<sup>5</sup>/<sub>6</sub> 取至百分位的近似值是？',
    opts:['0.82','0.83','0.84','0.85'], ans:1,
    expl:'步驟①做除法：5÷6=0.8333...；步驟②「取至百分位」看千分位（第 3 位）；步驟③千分位=3<5 → 捨去；步驟④= <strong class="correct-hl">0.83</strong>' },
  { id:'6u2e08', text:'<sup>7</sup>/<sub>9</sub> 取至十分位的近似值是？',
    opts:['0.7','0.8','0.9','0.77'], ans:1,
    expl:'步驟①做除法：7÷9=0.777...；步驟②「取至十分位」看百分位（第 2 位）；步驟③百分位=7≥5 → 進一，十分位 7 變 8；步驟④= <strong class="correct-hl">0.8</strong>' },
  { id:'6u2e09', text:'3<sup>5</sup>/<sub>7</sub> 取至百分位的近似值是？',
    opts:['3.70','3.71','3.72','3.73'], ans:1,
    expl:'步驟①做除法：5÷7=0.7142...，帶入：3.7142...；步驟②「取至百分位」看千分位（第 3 位）；步驟③千分位=4<5 → 捨去；步驟④= <strong class="correct-hl">3.71</strong>' },
  // 題型③：比較大小排列（例1–4）
  { id:'6ua15', text:'由小至大排列：0.75、<sup>1</sup>/<sub>2</sub>、<sup>13</sup>/<sub>20</sub>',
    opts:['0.75 &lt; <sup>13</sup>/<sub>20</sub> &lt; <sup>1</sup>/<sub>2</sub>',
          '<sup>1</sup>/<sub>2</sub> &lt; 0.75 &lt; <sup>13</sup>/<sub>20</sub>',
          '<sup>1</sup>/<sub>2</sub> &lt; <sup>13</sup>/<sub>20</sub> &lt; 0.75',
          '<sup>13</sup>/<sub>20</sub> &lt; <sup>1</sup>/<sub>2</sub> &lt; 0.75'], ans:2,
    expl:'步驟①統一化小數：<sup>1</sup>/<sub>2</sub>=0.5；<sup>13</sup>/<sub>20</sub>=0.65；0.75；步驟②由小至大：0.5<0.65<0.75；步驟③答：<strong class="correct-hl"><sup>1</sup>/<sub>2</sub> &lt; <sup>13</sup>/<sub>20</sub> &lt; 0.75</strong>' },
  { id:'6ua16', text:'以下哪個數最接近 1？',
    opts:['<sup>8</sup>/<sub>11</sub>','<sup>4</sup>/<sub>5</sub>','<sup>6</sup>/<sub>7</sub>','0.1'], ans:2,
    expl:'步驟①化小數：A=<sup>8</sup>/<sub>11</sub>≈0.73；B=<sup>4</sup>/<sub>5</sub>=0.8；C=<sup>6</sup>/<sub>7</sub>≈0.857；D=0.1；步驟②與 1 的差距：A≈0.27；B=0.2；C≈0.143；D=0.9；步驟③差距最小 = <strong class="correct-hl"><sup>6</sup>/<sub>7</sub></strong>' },
  { id:'6u2e10', text:'由大至小排列：1.6、1<sup>3</sup>/<sub>5</sub>、1<sup>5</sup>/<sub>8</sub>、1.62',
    opts:['1<sup>5</sup>/<sub>8</sub> &gt; 1.62 &gt; 1.6 = 1<sup>3</sup>/<sub>5</sub>',
          '1.62 &gt; 1<sup>5</sup>/<sub>8</sub> &gt; 1.6 &gt; 1<sup>3</sup>/<sub>5</sub>',
          '1.6 &gt; 1<sup>5</sup>/<sub>8</sub> &gt; 1.62 &gt; 1<sup>3</sup>/<sub>5</sub>',
          '1<sup>3</sup>/<sub>5</sub> &gt; 1<sup>5</sup>/<sub>8</sub> &gt; 1.62 &gt; 1.6'], ans:0,
    expl:'步驟①統一化小數：1<sup>3</sup>/<sub>5</sub>=1.6；1<sup>5</sup>/<sub>8</sub>=1.625；1.62；步驟②由大至小：1.625>1.62>1.6=1.6；步驟③答：<strong class="correct-hl">1<sup>5</sup>/<sub>8</sub> &gt; 1.62 &gt; 1.6 = 1<sup>3</sup>/<sub>5</sub></strong>' },
  { id:'6u2e11', text:'在 2.4 和 2<sup>1</sup>/<sub>2</sub> 之間，有沒有整數？',
    opts:['有，是 2','有，是 3','沒有整數','無法判斷'], ans:2,
    expl:'步驟①化小數：2<sup>1</sup>/<sub>2</sub>=2.5；步驟②範圍：2.4 至 2.5；步驟③2（在 2.4 左邊）和 3（在 2.5 右邊）都不在範圍內；步驟④ → <strong class="correct-hl">沒有整數</strong>' },
  // 題型④：填整數（例1–4）
  { id:'6ua17', text:'□ ÷ 3 &lt; 0.5，□ 是整數，□ 的最大可能值是？',
    opts:['0','1','2','3'], ans:1,
    expl:'步驟①解不等式：□÷3<0.5；步驟②兩邊×3：□<1.5；步驟③□是整數，1.5 以下最大整數 = <strong class="correct-hl">1</strong>（注意：2>1.5，不符合！）' },
  { id:'6ua18', text:'3 ÷ □ &gt; 0.4，□ 是整數，□ 的最大可能值是？',
    opts:['6','7','8','9'], ans:1,
    expl:'步驟①解不等式：3÷□>0.4；步驟②移項：□<3÷0.4=7.5；步驟③□是整數，7.5 以下最大整數 = <strong class="correct-hl">7</strong>（注意：8>7.5，不符合！）' },
  { id:'6u2e12', text:'□ ÷ 12 = 0.25，□ 是多少？',
    opts:['2','3','4','5'], ans:1,
    expl:'步驟①由□÷12=0.25 → □=0.25×12；步驟②或用分數：0.25=<sup>1</sup>/<sub>4</sub>=<sup>3</sup>/<sub>12</sub>（分子分母同×3）；步驟③□ = <strong class="correct-hl">3</strong>' },
  { id:'6u2e13', text:'在 0.6 和 0.7 之間，分母為 10 的分數有哪個？',
    opts:['<sup>6</sup>/<sub>10</sub>','<sup>7</sup>/<sub>10</sub>','沒有這樣的分數','<sup>65</sup>/<sub>100</sub>'], ans:2,
    expl:'步驟①範圍：0.6 至 0.7 之間（不含端點）；步驟②分母為10的分數：<sup>6</sup>/<sub>10</sub>=0.6（等於下界，不算「之間」）、<sup>7</sup>/<sub>10</sub>=0.7（等於上界，不算「之間」）；步驟③ → <strong class="correct-hl">沒有這樣的分數</strong>' },
  // 練習題 Q8、Q10、Q14
  { id:'6ua11', text:'0.15 化為最簡分數',
    opts:['<sup>1</sup>/<sub>5</sub>','<sup>3</sup>/<sub>20</sub>','<sup>15</sup>/<sub>100</sub>','<sup>3</sup>/<sub>15</sub>'], ans:1,
    expl:'步驟①小數轉分數：0.15=<sup>15</sup>/<sub>100</sub>；步驟②求GCF：15和100的最大公因數=5；步驟③÷5化最簡：= <strong class="correct-hl"><sup>3</sup>/<sub>20</sub></strong>' },
  { id:'6ua14', text:'比較：<sup>9</sup>/<sub>10</sub> 和 <sup>14</sup>/<sub>17</sub> 哪個較大？',
    opts:['<sup>9</sup>/<sub>10</sub> 較大','<sup>14</sup>/<sub>17</sub> 較大','兩者相等','無法比較'], ans:0,
    expl:'步驟①統一化小數：<sup>9</sup>/<sub>10</sub>=0.9；<sup>14</sup>/<sub>17</sub>=14÷17≈0.82；步驟②比較：0.9>0.82；步驟③ → <strong class="correct-hl"><sup>9</sup>/<sub>10</sub> 較大</strong>' },
  { id:'6ua19', text:'大眾基金 0.08，青苗會 0.15，綠地球 <sup>7</sup>/<sub>50</sub>，哪個獲捐款最多？',
    opts:['大眾基金','青苗會','綠地球','三者相等'], ans:1,
    expl:'步驟①統一化小數：大眾基金=0.08；青苗會=0.15；<sup>7</sup>/<sub>50</sub>=7÷50=0.14；步驟②比較：0.15>0.14>0.08；步驟③最多 = <strong class="correct-hl">青苗會（0.15）</strong>' },
  { id:'6ua20', text:'三間機構合共捐款（0.08 + 0.15 + <sup>7</sup>/<sub>50</sub>）化最簡分數是？',
    opts:['<sup>3</sup>/<sub>10</sub>','<sup>37</sup>/<sub>100</sub>','<sup>9</sup>/<sub>25</sub>','<sup>2</sup>/<sub>5</sub>'], ans:1,
    expl:'步驟①統一化小數：0.08+0.15+<sup>7</sup>/<sub>50</sub>=0.08+0.15+0.14=0.37；步驟②0.37=<sup>37</sup>/<sub>100</sub>；步驟③37和100的GCF=1，已是最簡 → <strong class="correct-hl"><sup>37</sup>/<sub>100</sub></strong>' },
],

book6ua3: [
  // 題型①：直接求平均數（例1–5）
  { id:'6u3e01', text:'9、4、17 三個數的平均數是多少？',
    opts:['8','9','10','11'], ans:2,
    expl:'步驟①公式：平均數=總和÷個數；步驟②求總和：9+4+17=30；步驟③÷個數：30÷3 = <strong class="correct-hl">10</strong>' },
  { id:'6ua22', text:'30、0、13、25 的平均數是多少？（注意 0 也計入個數）',
    opts:['14','15','16','17'], ans:3,
    expl:'步驟①注意：0 也算一個數，共有 4 個數；步驟②求總和：30+0+13+25=68；步驟③平均=68÷4 = <strong class="correct-hl">17</strong>' },
  { id:'6u3e02', text:'7、7.5、8、0、9<sup>1</sup>/<sub>2</sub> 的平均數是多少？（取至十分位）',
    opts:['6.2','6.3','6.4','6.5'], ans:2,
    expl:'步驟①化帶分數：9<sup>1</sup>/<sub>2</sub>=9.5；步驟②注意：0 也計入個數，共 5 個；步驟③總和：7+7.5+8+0+9.5=32；步驟④平均=32÷5 = <strong class="correct-hl">6.4</strong>' },
  { id:'6u3e03', text:'34、72.6、34、34、72.6、72.6 的平均數是多少？',
    opts:['52.3','53.3','54.3','55.3'], ans:1,
    expl:'步驟①識別規律：34 出現 3 次，72.6 出現 3 次；步驟②計算：34×3=102，72.6×3=217.8；步驟③總和=319.8；步驟④平均=319.8÷6 = <strong class="correct-hl">53.3</strong>' },
  { id:'6u3e04', text:'86、74、90、68、92 分，平均分是多少？',
    opts:['80分','81分','82分','83分'], ans:2,
    expl:'步驟①求總和：86+74+90+68+92=410；步驟②個數=5；步驟③平均=410÷5 = <strong class="correct-hl">82 分</strong>' },
  // 題型②：求缺失的數（例1–5）
  { id:'6ua23', text:'3 個數平均 4.8，其中兩個是 2.9 和 0，第三個是多少？',
    opts:['10.5','11.0','11.5','12.0'], ans:2,
    expl:'步驟①求總和：平均×個數=4.8×3=14.4；步驟②減去已知兩數：14.4−2.9−0=11.5；步驟③第三個數 = <strong class="correct-hl">11.5</strong>' },
  { id:'6ua24', text:'4 個數平均 9，已知 7.16、8.8、15.75，被塗污的數是多少？',
    opts:['3.19','4.29','5.19','6.29'], ans:1,
    expl:'步驟①求總和：9×4=36；步驟②減去三個已知數：36−7.16−8.8−15.75；步驟③=36−31.71 = <strong class="correct-hl">4.29</strong>' },
  { id:'6ua27', text:'4 次英文小測平均 46.5 分，已知兩次是 46 分和 44 分，第三四次分數相同，各是多少分？',
    opts:['46分','47分','48分','49分'], ans:2,
    expl:'步驟①求總和：46.5×4=186；步驟②已知兩次：46+44=90；步驟③第三四次之和：186−90=96；步驟④各一次：96÷2 = <strong class="correct-hl">48 分</strong>' },
  { id:'6ua25', text:'小提琴班 5 人平均 8.2 歲，其中兩人 8 歲、兩人 9 歲，餘下一人幾歲？',
    opts:['6歲','7歲','8歲','9歲'], ans:1,
    expl:'步驟①求總和：8.2×5=41；步驟②減去四位已知：8×2+9×2=16+18=34；步驟③餘下一人：41−34 = <strong class="correct-hl">7 歲</strong>' },
  { id:'6u3e05', text:'5 個數的平均數是 7，其中四個數之和是 26，第五個數是多少？',
    opts:['7','8','9','10'], ans:2,
    expl:'步驟①求總和：平均×個數=7×5=35；步驟②四個數之和已知=26；步驟③第五個數=35−26 = <strong class="correct-hl">9</strong>' },
  // 題型③：加入／移走後求平均（例1–3）
  { id:'6ua26', text:'5 隻狗平均 2.5 kg，加入 1 隻 3 kg 後，新平均是多少 kg？（取至十分位）',
    opts:['2.4 kg','2.5 kg','2.6 kg','2.7 kg'], ans:2,
    expl:'步驟①原 5 隻總重：2.5×5=12.5 kg；步驟②加入後總重：12.5+3=15.5 kg；步驟③新平均：15.5÷6=2.583...≈ <strong class="correct-hl">2.6 kg</strong>（取至十分位）' },
  { id:'6u3e06', text:'班上原有 10 名學生，平均身高 142 cm，加入 2 名各 150 cm 的新生後，新平均身高約是多少？（取至十分位）',
    opts:['142.3 cm','143.0 cm','143.3 cm','144.0 cm'], ans:2,
    expl:'步驟①原來總和：142×10=1420 cm；步驟②新加 2 人：150×2=300 cm；步驟③新總和：1420+300=1720 cm；步驟④新平均：1720÷12≈ <strong class="correct-hl">143.3 cm</strong>' },
  { id:'6u3e07', text:'6 個數的平均數是 8，移去其中一個數 9 後，剩下 5 個數的平均是多少？',
    opts:['7.2','7.4','7.6','7.8'], ans:3,
    expl:'步驟①原 6 個數總和：8×6=48；步驟②移走 9 後新總和：48−9=39；步驟③5 個數的新平均：39÷5 = <strong class="correct-hl">7.8</strong>' },
  // 題型④：從平均數判斷條件（例1–3）
  { id:'6ua28', text:'數學科第二次 36 分、第三次 40 分，其餘兩次均滿分 50 分，平均最高可達多少分？',
    opts:['42分','43分','44分','45分'], ans:2,
    expl:'步驟①「最高可達」→ 其餘兩次取最高分 50；步驟②四次總和：50+50+36+40=176；步驟③平均：176÷4 = <strong class="correct-hl">44 分</strong>' },
  { id:'6u3e08', text:'3 次測驗的平均分要達 60 分，前兩次分別得 55 分和 48 分，第三次至少要得多少分？',
    opts:['67分','72分','77分','82分'], ans:2,
    expl:'步驟①需要的總分：60×3=180 分；步驟②前兩次之和：55+48=103 分；步驟③第三次最少：180−103 = <strong class="correct-hl">77 分</strong>' },
  { id:'6u3e09', text:'4 個數的平均數是 12，其中一個數是 50，其餘三個數的平均是多少？',
    opts:['−<sup>2</sup>/<sub>3</sub>','<sup>2</sup>/<sub>3</sub>','−2','2'], ans:0,
    expl:'步驟①四數總和：12×4=48；步驟②其餘三個和：48−50=−2（結果是負數！）；步驟③三個數的平均：−2÷3 = <strong class="correct-hl">−<sup>2</sup>/<sub>3</sub></strong>（負數代表三個數合計比 0 還小）' },
  // 練習題 Q16
  { id:'6ua21', text:'5 個數的平均數是 7，這 5 個數的總和是多少？',
    opts:['25','30','35','40'], ans:2,
    expl:'步驟①公式：總和=平均×個數；步驟②代入：7×5 = <strong class="correct-hl">35</strong>（此題求總和，不是求平均！）' },
],

/* ── 小學數學新思維 6上B：百分數‧對稱‧容量和體積 ── */
book6ub5: [
  // ── 基礎題（詳細講解版）──
  { id:'6ub01', text:'計算：6.3 × 2.5 = ?',
    opts:['13.5','14.25','15.75','16.8'], ans:2,
    expl:'步驟①先化整數乘：63 × 25 = 1575；步驟②計算小數位數：6.3（1位）+2.5（1位）= 共2位；步驟③1575 ÷ 100 = <strong class="correct-hl">15.75</strong>' },
  { id:'6ub02', text:'計算：9.6 ÷ 0.08 = ?',
    opts:['12','1.2','120','1200'], ans:2,
    expl:'步驟①除數有小數→分子分母同乘100消去小數點；步驟②9.6÷0.08=960÷8 = <strong class="correct-hl">120</strong>' },
  { id:'6ub03', text:'一件衫打七五折，售 $270，原價是多少？',
    opts:['$320','$340','$360','$380'], ans:2,
    expl:'步驟①打七五折=售價是原價的75%；步驟②設原價=x：x×75%=270；步驟③x=270÷0.75 = <strong class="correct-hl">$360</strong>' },
  { id:'6ub04', text:'成本 $200，售出 $260，利潤率是多少？',
    opts:['25%','28%','30%','32%'], ans:2,
    expl:'步驟①利潤=售價−成本=260−200=$60；步驟②利潤率=利潤÷成本×100%；步驟③=60÷200×100% = <strong class="correct-hl">30%</strong>' },
  { id:'6ub05', text:'$4000 存款，年利率 2.5%，存 2 年利息是多少？',
    opts:['$160','$180','$200','$220'], ans:2,
    expl:'步驟①公式：利息=本金×年利率×年數；步驟②代入：4000×2.5%×2=4000×0.025×2；步驟③= <strong class="correct-hl">$200</strong>' },
  { id:'6ub06', text:'化簡比 0.6 : 0.8',
    opts:['2:3','3:4','4:5','6:8'], ans:1,
    expl:'步驟①兩邊同乘10消去小數：0.6:0.8=6:8；步驟②同除最大公因數（÷2）化至最簡：= <strong class="correct-hl">3:4</strong>' },
  { id:'6ub07', text:'甲:乙 = 2:7，合共 $270，乙有多少？',
    opts:['$140','$180','$210','$240'], ans:2,
    expl:'步驟①總份數=2+7=9份；步驟②每份=270÷9=$30；步驟③乙佔7份=7×30 = <strong class="correct-hl">$210</strong>' },
  { id:'6ub08', text:'某數的 35% 是 63，這個數是多少？',
    opts:['160','170','180','200'], ans:2,
    expl:'步驟①設該數為x：x×35%=63；步驟②x=63÷0.35=6300÷35 = <strong class="correct-hl">180</strong>' },
  { id:'6ub09', text:'$720 按 3:2:1 分給三人，最少的一份是多少？',
    opts:['$100','$120','$140','$160'], ans:1,
    expl:'步驟①總份數=3+2+1=6份；步驟②每份=720÷6=$120；步驟③最少的一份（1份）=1×$120 = <strong class="correct-hl">$120</strong>' },
  { id:'6ub10', text:'某班 45 人，60% 是女生，男生有多少人？',
    opts:['15','17','18','20'], ans:2,
    expl:'步驟①女生=45×60%=45×0.6=27人；步驟②男生=總人數−女生=45−27 = <strong class="correct-hl">18人</strong>' },
  { id:'6ub11', text:'貨品先減價 20%，再加價 20%，最終售價是原價的多少？',
    opts:['96%','98%','100%','102%'], ans:0,
    expl:'步驟①減20%→乘0.8；步驟②再加20%→乘1.2；步驟③最終倍數=0.8×1.2=0.96→原價的 <strong class="correct-hl">96%</strong>（陷阱：先減後加並非100%，實際虧損4%！）' },
  { id:'6ub12', text:'地圖上 3 cm 代表實際 6 km，地圖比例尺是？',
    opts:['1:20000','1:200000','1:2000000','1:20000000'], ans:1,
    expl:'步驟①統一單位：6 km=6×100000 cm=600000 cm；步驟②比例尺=圖上:實際=3:600000；步驟③化最簡 = <strong class="correct-hl">1:200000</strong>' },

  // ── 單元五：百分數 模擬練習題 ──
  { id:'6ubp01', text:'8% 化為最簡分數',
    opts:['<sup>2</sup>/<sub>25</sub>','<sup>4</sup>/<sub>50</sub>','<sup>1</sup>/<sub>12</sub>','<sup>8</sup>/<sub>100</sub>'], ans:0,
    expl:'步驟①去%，寫成分數：8% = <sup>8</sup>/<sub>100</sub>；步驟②化最簡（÷4）：<sup>8</sup>/<sub>100</sub> → <strong class="correct-hl"><sup>2</sup>/<sub>25</sub></strong>（<sup>4</sup>/<sub>50</sub> 只化一半，不是最簡！）' },
  { id:'6ubp02', text:'16.5% 化為最簡分數',
    opts:['<sup>33</sup>/<sub>100</sub>','<sup>33</sup>/<sub>200</sub>','<sup>165</sup>/<sub>1000</sub>','<sup>17</sup>/<sub>100</sub>'], ans:1,
    expl:'步驟①分子含小數，同乘 10 使分子成整數：16.5% → <sup>165</sup>/<sub>1000</sub>；步驟②化最簡（÷5）：= <strong class="correct-hl"><sup>33</sup>/<sub>200</sub></strong>' },
  { id:'6ubp03', text:'706% 化為最簡帶分數',
    opts:['7<sup>3</sup>/<sub>100</sub>','7<sup>6</sup>/<sub>100</sub>','7<sup>3</sup>/<sub>50</sub>','70<sup>3</sup>/<sub>50</sub>'], ans:2,
    expl:'步驟①：706% = <sup>706</sup>/<sub>100</sub> = 7<sup>6</sup>/<sub>100</sub>；步驟②化簡分數部分（÷2）：<sup>6</sup>/<sub>100</sub> = <sup>3</sup>/<sub>50</sub>；答 = <strong class="correct-hl">7<sup>3</sup>/<sub>50</sub></strong>' },
  { id:'6ubp04', text:'0.2% 化為最簡分數',
    opts:['<sup>1</sup>/<sub>50</sub>','<sup>1</sup>/<sub>500</sub>','<sup>2</sup>/<sub>100</sub>','<sup>1</sup>/<sub>5</sub>'], ans:1,
    expl:'步驟①分子有小數，同乘 10：0.2% → <sup>2</sup>/<sub>1000</sub>；步驟②化最簡（÷2）：= <strong class="correct-hl"><sup>1</sup>/<sub>500</sub></strong>（陷阱：<sup>1</sup>/<sub>50</sub> 是 2% 的答案！）' },
  { id:'6ubp05', text:'<sup>9</sup>/<sub>20</sub> 化為百分數',
    opts:['40%','42%','45%','48%'], ans:2,
    expl:'步驟①方法：分子÷分母×100%；步驟②9÷20=0.45；步驟③0.45×100% = <strong class="correct-hl">45%</strong>' },
  { id:'6ubp06', text:'<sup>3</sup>/<sub>125</sub> 化為百分數',
    opts:['2%','2.4%','2.5%','3%'], ans:1,
    expl:'步驟①分子÷分母：3÷125=0.024；步驟②化百分數：0.024×100% = <strong class="correct-hl">2.4%</strong>（即2<sup>2</sup>/<sub>5</sub>%）' },
  { id:'6ubp07', text:'1<sup>3</sup>/<sub>25</sub> 化為百分數',
    opts:['103%','104%','112%','113%'], ans:2,
    expl:'步驟①整數部分1=100%；步驟②分數部分：3÷25×100%=12%；步驟③合計=100%+12% = <strong class="correct-hl">112%</strong>（陷阱：103%是誤以為<sup>3</sup>/<sub>25</sub>=3%！）' },
  { id:'6ubp08', text:'124% 化為小數',
    opts:['12.4','1.24','0.124','0.0124'], ans:1,
    expl:'步驟①方法：去%再÷100（小數點左移2位）；步驟②124÷100 = <strong class="correct-hl">1.24</strong>' },
  { id:'6ubp09', text:'0.68% 化為小數',
    opts:['0.68','0.068','0.0068','0.00068'], ans:2,
    expl:'步驟①方法：去%再÷100（小數點左移2位）；步驟②在0.68基礎上再左移2位→0.0068；步驟③答 <strong class="correct-hl">0.0068</strong>（陷阱：0.068只移了一位！）' },
  { id:'6ubp10', text:'7<sup>4</sup>/<sub>5</sub>% 化為小數',
    opts:['0.78','0.078','7.8','0.0078'], ans:1,
    expl:'步驟①化成純小數%：7<sup>4</sup>/<sub>5</sub>% = 7.8%；步驟②÷ 100（左移 2 位）：7.8 → 0.078；答 <strong class="correct-hl">0.078</strong>' },
  { id:'6ubp11', text:'0.096 化為百分數',
    opts:['0.96%','9.6%','96%','9.06%'], ans:1,
    expl:'步驟①方法：小數×100加%（小數點右移2位）；步驟②0.096×100=9.6；步驟③答 <strong class="correct-hl">9.6%</strong>' },
  { id:'6ubp12', text:'7.008 化為百分數',
    opts:['70.08%','700.8%','7.008%','70.8%'], ans:1,
    expl:'步驟①方法：小數×100加%（小數點右移2位）；步驟②7.008×100=700.8；步驟③答 <strong class="correct-hl">700.8%</strong>' },
  { id:'6ubp13', text:'以下哪項數值最小？A：5.2%　B：15.2%　C：52%　D：15.2÷100',
    opts:['A（5.2%）','B（15.2%）','C（52%）','D（15.2÷100）'], ans:0,
    expl:'步驟①統一化小數：A=5.2%=0.052，B=15.2%=0.152，C=52%=0.52，D=15.2÷100=0.152；步驟②比較：0.052最小 → <strong class="correct-hl">A（0.052）</strong>' },
  { id:'6ubp14', text:'由大至小排列：6.9，609%，6<sup>8</sup>/<sub>9</sub>',
    opts:['6.9 &gt; 6<sup>8</sup>/<sub>9</sub> &gt; 609%','609% &gt; 6.9 &gt; 6<sup>8</sup>/<sub>9</sub>','6<sup>8</sup>/<sub>9</sub> &gt; 6.9 &gt; 609%','6.9 &gt; 609% &gt; 6<sup>8</sup>/<sub>9</sub>'], ans:0,
    expl:'步驟①統一化小數：609%=6.09，6<sup>8</sup>/<sub>9</sub>≈6.889，6.9=6.9；步驟②由大至小：6.9&gt;6.889&gt;6.09 → <strong class="correct-hl">6.9 &gt; 6<sup>8</sup>/<sub>9</sub> &gt; 609%</strong>' },
  { id:'6ubp15', text:'吉祥物得票：熊貓隊長33%，小熊貓妹妹<sup>6</sup>/<sub>25</sub>，刺蝟博士0.43。由少至多排列？',
    opts:['熊貓＜小熊貓＜刺蝟','小熊貓＜熊貓＜刺蝟','刺蝟＜熊貓＜小熊貓','小熊貓＜刺蝟＜熊貓'], ans:1,
    expl:'步驟①統一化小數：<sup>6</sup>/<sub>25</sub>=0.24，33%=0.33，0.43；步驟②由少至多：0.24&lt;0.33&lt;0.43 → <strong class="correct-hl">小熊貓妹妹＜熊貓隊長＜刺蝟博士</strong>' },
  { id:'6ubp16', text:'同上，哪款吉祥物最有可能當選（得票最多）？',
    opts:['熊貓隊長（33%）','小熊貓妹妹（<sup>6</sup>/<sub>25</sub>）','刺蝟博士（0.43）','無法判斷'], ans:2,
    expl:'步驟①從上題知三者化小數：0.43、0.33、0.24；步驟②0.43最大 → <strong class="correct-hl">刺蝟博士</strong>最多票，最有可能當選' },
  { id:'6ubp17', text:'書法展：楷書佔44%。44% 化為最簡分數是？',
    opts:['<sup>11</sup>/<sub>25</sub>','<sup>22</sup>/<sub>50</sub>','<sup>44</sup>/<sub>100</sub>','<sup>11</sup>/<sub>50</sub>'], ans:0,
    expl:'步驟①44%=<sup>44</sup>/<sub>100</sub>；步驟②求44和100的最大公因數=4；步驟③÷4化最簡 = <strong class="correct-hl"><sup>11</sup>/<sub>25</sub></strong>（<sup>22</sup>/<sub>50</sub>未完全化簡！）' },
  { id:'6ubp18', text:'行書和草書各佔<sup>7</sup>/<sub>25</sub>，合共佔幾%？',
    opts:['28%','48%','56%','64%'], ans:2,
    expl:'步驟①<sup>7</sup>/<sub>25</sub>化%：7÷25×100%=28%；步驟②行書+草書=28%+28% = <strong class="correct-hl">56%</strong>' },
  { id:'6ubp19', text:'以下哪個數在 1.4 和 103% 之間？',
    opts:['A（10.2）','B（125%）','C（13.5%）','D（150%）'], ans:1,
    expl:'步驟①確定範圍：103%=1.03，範圍是1.03至1.4；步驟②逐項判斷：A=10.2（太大），B=125%=1.25（✓），C=13.5%=0.135（太小），D=150%=1.5（太大）；步驟③ → <strong class="correct-hl">B（125%）</strong>' },
  { id:'6ubp20', text:'★÷7 化百分數比50%大但比70%小，★是哪個整數？',
    opts:['3','4','5','3和4均可'], ans:1,
    expl:'步驟①建不等式：50%&lt;★÷7&lt;70%；步驟②兩邊×7：3.5&lt;★&lt;4.9；步驟③整數只有 <strong class="correct-hl">4</strong>（驗算：4÷7≈57.1%，在50%至70%之間 ✓）' },

  // ── 單元五：百分數 加大題庫 ──
  { id:'6ubp21', text:'<sup>56</sup>/<sub>200</sub> 化為百分數',
    opts:['2.8%','28%','56%','280%'], ans:1,
    expl:'步驟①方法：分子÷分母×100%；步驟②56÷200×100%=5600÷200 = <strong class="correct-hl">28%</strong>（技巧：分母200時，分子÷2即得%）' },
  { id:'6ubp22', text:'<sup>5</sup>/<sub>16</sub> 化為百分數',
    opts:['31%','31.25%','32%','31.5%'], ans:1,
    expl:'步驟①分子÷分母：5÷16=0.3125；步驟②×100% = <strong class="correct-hl">31.25%</strong>（即31<sup>1</sup>/<sub>4</sub>%）' },
  { id:'6ubp23', text:'已知 <sup>17</sup>/<sub>80</sub> = 21.25%，則 <sup>17</sup>/<sub>800</sub> = ？',
    opts:['0.2125%','2.125%','21.25%','212.5%'], ans:1,
    expl:'步驟①觀察：分母80→800，即分母×10；步驟②分母×10→百分數÷10；步驟③21.25%÷10 = <strong class="correct-hl">2.125%</strong>' },
  { id:'6ubp24', text:'7<sup>3</sup>/<sub>5</sub>% 化為小數',
    opts:['0.76','0.076','7.6','0.0076'], ans:1,
    expl:'步驟①化純小數%：7<sup>3</sup>/<sub>5</sub>% = 7.6%；步驟②÷100（左移 2 位）：7.6 → <strong class="correct-hl">0.076</strong>' },
  { id:'6ubp25', text:'4人答對率：子浩85%，詠珊80%，海晴<sup>4</sup>/<sub>5</sub>，柏然<sup>7</sup>/<sub>8</sub>。哪兩人答對率相同？',
    opts:['子浩=詠珊','詠珊=海晴','子浩=海晴','詠珊=柏然'], ans:1,
    expl:'步驟①統一化小數：子浩=85%=0.85，詠珊=80%=0.8，海晴=<sup>4</sup>/<sub>5</sub>=0.8，柏然=<sup>7</sup>/<sub>8</sub>=0.875；步驟②詠珊=海晴=0.8 → <strong class="correct-hl">詠珊=海晴</strong>相同' },
  { id:'6ubp26', text:'車廂100人，普通車卡59人，餐車卡12人，頭等車卡乘客佔幾%？',
    opts:['19%','23%','29%','31%'], ans:2,
    expl:'步驟①頭等人數=100−59−12=29人；步驟②佔百分率=29÷100×100% = <strong class="correct-hl">29%</strong>' },
  { id:'6ubp27', text:'1 米絲帶用了 42%，用了多少厘米？',
    opts:['0.42 cm','4.2 cm','42 cm','420 cm'], ans:2,
    expl:'步驟①統一單位：1米=100厘米；步驟②用了=100×42%=100×0.42 = <strong class="correct-hl">42厘米</strong>' },
  { id:'6ubp28', text:'手工紙 100 張，用了 18 張，餘下佔全部的幾%？',
    opts:['18%','28%','72%','82%'], ans:3,
    expl:'步驟①餘下=100−18=82張；步驟②佔百分率=82÷100×100% = <strong class="correct-hl">82%</strong>' },
  { id:'6ubp29', text:'100 格方格紙已塗 28 格，再塗多少格使着色達 61%？',
    opts:['27格','28格','33格','39格'], ans:2,
    expl:'步驟①目標着色格數=100×61%=61格；步驟②現有28格；步驟③需再塗=61−28 = <strong class="correct-hl">33格</strong>' },
  { id:'6ubp30', text:'432% 等於全體的多少倍？',
    opts:['0.432倍','4.32倍','43.2倍','432倍'], ans:1,
    expl:'步驟①432%化小數：432÷100=4.32；步驟②即全體的 <strong class="correct-hl">4.32倍</strong>（百分數可大於100%，代表超過1個全體）' },

],

/* ── 6上B 單元六：對稱 ── */
book6ub6: [
  { id:'6ubs01', text:'正三角形（等邊三角形）有多少條對稱軸？',
    opts:['1條','2條','3條','4條'], ans:2,
    expl:'步驟①規律：正n邊形有n條對稱軸；步驟②正三角形n=3；步驟③每頂點至對邊中點各一條，共 <strong class="correct-hl">3條</strong>' },
  { id:'6ubs02', text:'長方形有多少條對稱軸？',
    opts:['1條','2條','3條','4條'], ans:1,
    expl:'步驟①找長方形對稱軸：橫向中線1條，縱向中線1條；步驟②共 <strong class="correct-hl">2條</strong>（陷阱：對角線不是對稱軸！）' },
  { id:'6ubs03', text:'正六邊形有多少條對稱軸？',
    opts:['4條','5條','6條','8條'], ans:2,
    expl:'步驟①規律：正 n 邊形有 n 條對稱軸；步驟②正六邊形 n=6，共 6 條；步驟③細分：3條連對頂點＋3條連對邊中點 = <strong class="correct-hl">6條</strong>' },
  { id:'6ubs04', text:'平行四邊形有多少條對稱軸？',
    opts:['0條','1條','2條','4條'], ans:0,
    expl:'步驟①嘗試沿各方向對摺平行四邊形；步驟②任何方向都不能完全重合；步驟③所以 <strong class="correct-hl">0條</strong>（陷阱：常誤答2條！）' },
  { id:'6ubs05', text:'圓形有多少條對稱軸？',
    opts:['4條','8條','12條','無限條'], ans:3,
    expl:'步驟①圓形的對稱軸是直徑；步驟②直徑可沿任意方向畫，有無限多條；步驟③所以對稱軸有 <strong class="correct-hl">無限條</strong>' },
  { id:'6ubs06', text:'以下哪種多邊形有最多對稱軸？',
    opts:['直角梯形','正方形','等腰直角三角形','不等邊三角形'], ans:1,
    expl:'步驟①列出各圖形對稱軸：直角梯形=0條，正方形=4條，等腰直角三角形=1條，不等邊三角形=0條；步驟②最多的是 <strong class="correct-hl">正方形（4條）</strong>' },
  { id:'6ubs07', text:'P=4條、Q=0條、R=3條、S=1條、T=無限條。子聰選3個軸對稱圖形，對稱軸分別1、3、4條，他選了哪3個？',
    opts:['P、Q、S','P、R、S','Q、R、T','R、S、T'], ans:1,
    expl:'步驟①需要對稱軸各1條、3條、4條；步驟②對照已知：S=1條，R=3條，P=4條；步驟③三者均是軸對稱圖形 → <strong class="correct-hl">P、R、S</strong>' },
  { id:'6ubs08', text:'圖形頂點距垂直對稱軸 3 格，另一側對應點距對稱軸幾格？',
    opts:['1格','2格','3格','6格'], ans:2,
    expl:'步驟①對稱性質：對應點與對稱軸的距離相等；步驟②原點距軸3格 → 對應點也距軸 <strong class="correct-hl">3格</strong>（在軸的另一側）' },
  { id:'6ubs09', text:'正方形紙對摺 2 次後剪去一角，展開後被剪部分是？',
    opts:['中央1個缺口','每個角各有1個方形缺口','只有對角2個缺口','只有1個缺口'], ans:1,
    expl:'步驟①對摺2次=紙分成4等份；步驟②剪去折疊後的1角=實際剪去4份各1角；步驟③展開後每個角都有缺口 → <strong class="correct-hl">每個角各有1個方形缺口</strong>' },
  { id:'6ubs10', text:'5個設計對稱軸條數：A=1，B=2，C=？，D=0，E=4，平均=2條。C有多少條？',
    opts:['1條','2條','3條','5條'], ans:2,
    expl:'步驟①總和=平均×個數=2×5=10；步驟②已知A+B+D+E=1+2+0+4=7；步驟③C=10−7 = <strong class="correct-hl">3條</strong>' },
  { id:'6ubs11', text:'菱形有多少條對稱軸？',
    opts:['0條','1條','2條','4條'], ans:2,
    expl:'步驟①菱形四邊等長；步驟②沿兩條對角線方向對摺均能完全重合；步驟③共 <strong class="correct-hl">2條</strong>對稱軸（陷阱：易誤答4條！）' },
  { id:'6ubs12', text:'正五邊形有多少條對稱軸？',
    opts:['3條','4條','5條','6條'], ans:2,
    expl:'步驟①規律：正n邊形有n條對稱軸；步驟②正五邊形n=5；步驟③每頂點至對邊中點各一條，共 <strong class="correct-hl">5條</strong>' },

],

/* ── 6上B 單元七：容量和體積 ── */
book6ub7: [
  { id:'6ubv01', text:'3 L = ? cm³',
    opts:['300','3000','30000','300000'], ans:1,
    expl:'步驟①換算關係：1 L = 1000 cm³（L換cm³要×1000）；步驟②計算：3 × 1000 = <strong class="correct-hl">3000 cm³</strong>' },
  { id:'6ubv02', text:'2746 cm³ = ? L',
    opts:['0.2746','2.746','27.46','274.6'], ans:1,
    expl:'步驟①換算方向：cm³ → L，要÷1000（單位變大，數字變小）；步驟②計算：2746÷1000 = <strong class="correct-hl">2.746 L</strong>' },
  { id:'6ubv03', text:'43 m³ = ? L',
    opts:['430','4300','43000','430000'], ans:2,
    expl:'步驟①換算關係：1 m³ = 1000 L（m³換L要×1000）；步驟②計算：43 × 1000 = <strong class="correct-hl">43000 L</strong>' },
  { id:'6ubv04', text:'長方體盒長20cm、闊10cm、高15cm，容量是多少mL？',
    opts:['2500 mL','3000 mL','3200 mL','4000 mL'], ans:1,
    expl:'步驟①公式：容量 = 長 × 闊 × 高；步驟②代入：20 × 10 × 15 = 3000 cm³；步驟③換算：1 cm³ = 1 mL → <strong class="correct-hl">3000 mL</strong>' },
  { id:'6ubv05', text:'同上長方體盒，注入1800mL水，水深多少cm？',
    opts:['7 cm','8 cm','9 cm','10 cm'], ans:2,
    expl:'步驟①公式：水深 = 水量 ÷ 底面積；步驟②底面積 = 20 × 10 = 200 cm²；步驟③水深 = 1800 ÷ 200 = <strong class="correct-hl">9 cm</strong>' },
  { id:'6ubv06', text:'哪個容器容量最大？A：12×6×8　B：6×9×12　C：正方體邊長8　D：7×10×8',
    opts:['A（576 cm³）','B（648 cm³）','C（512 cm³）','D（560 cm³）'], ans:1,
    expl:'步驟①分別計算各容量：A=12×6×8=576，B=6×9×12=648，C=8³=512，D=7×10×8=560；步驟②比較大小：648最大 → <strong class="correct-hl">B（648 cm³）</strong>' },
  { id:'6ubv07', text:'膠盒外部20×16×16cm，四邊和底各厚2cm，容量是多少mL？',
    opts:['2304 mL','2560 mL','2688 mL','3072 mL'], ans:2,
    expl:'步驟①求內部尺寸（四邊各厚2cm，兩邊各減）：長=20−2−2=16，闊=16−2−2=12，高=16−2=14（底板只減一次）；步驟②容量 = 16 × 12 × 14 = <strong class="correct-hl">2688 mL</strong>' },
  { id:'6ubv08', text:'同上膠盒（容量2688mL），注入5120mL水，水會否溢出？',
    opts:['不會（5120&lt;2688）','會（5120&gt;2688）','不會（5120&lt;3000）','無法判斷'], ans:1,
    expl:'步驟①比較注水量與容量：注水量 5120 mL，容量 2688 mL；步驟②5120 &gt; 2688，超出容量 → <strong class="correct-hl">水會溢出</strong>' },
  { id:'6ubv09', text:'量杯讀數180mL含8粒相同波子，取走6粒後讀數降至120mL，量杯內有多少mL水？',
    opts:['80 mL','100 mL','120 mL','140 mL'], ans:1,
    expl:'步驟①取走 6 粒後讀數降：180−120=60 mL，即 6 粒體積=60 mL，每粒=60÷6=10 cm³；步驟②最終杯中剩 2 粒波子；步驟③水量=120−2×10 = <strong class="correct-hl">100 mL</strong>' },
  { id:'6ubv10', text:'量杯初始160mL，放入2粒大鋼珠後214mL，每粒大鋼珠體積多少cm³？',
    opts:['13.5 cm³','22 cm³','27 cm³','54 cm³'], ans:2,
    expl:'步驟①放入2粒鋼珠後水位升高，升高量=鋼珠總體積：214−160=54 mL；步驟②每粒大鋼珠體積 = 54 ÷ 2 = <strong class="correct-hl">27 cm³</strong>' },
  { id:'6ubv11', text:'另一量杯160mL放5粒小鋼珠後205mL，小鋼珠體積是大鋼珠（27cm³）的幾分之幾？',
    opts:['<sup>1</sup>/<sub>9</sub>','<sup>1</sup>/<sub>6</sub>','<sup>1</sup>/<sub>3</sub>','<sup>1</sup>/<sub>2</sub>'], ans:2,
    expl:'步驟①5粒小珠總體積：205−160=45 mL；步驟②每粒小珠體積：45÷5=9 cm³；步驟③與大珠(27 cm³)之比：9÷27 = <strong class="correct-hl"><sup>1</sup>/<sub>3</sub></strong>' },
  { id:'6ubv12', text:'水箱長40cm闊15cm，放雲石後水位由3.5cm升至5cm，雲石體積多少cm³？',
    opts:['600 cm³','750 cm³','900 cm³','1200 cm³'], ans:2,
    expl:'步驟①水位升高=放入雲石後的增量：5−3.5=1.5 cm；步驟②公式：物體體積=底面積×水位升高；步驟③雲石體積=40×15×1.5 = <strong class="correct-hl">900 cm³</strong>' },
  { id:'6ubv13', text:'正方體水缸邊長0.2m，原水深8cm，放入2座各240cm³假山，新水深多少cm？',
    opts:['8.4 cm','8.6 cm','9.0 cm','9.2 cm'], ans:3,
    expl:'步驟①統一單位：0.2 m=20 cm，底面積=20×20=400 cm²；步驟②假山總體積=240×2=480 cm³；步驟③水位升高=480÷400=1.2 cm；步驟④新水深=8+1.2 = <strong class="correct-hl">9.2 cm</strong>' },
  { id:'6ubv14', text:'木箱外尺寸30×14×7cm，四邊板厚2cm底板厚2cm，容量多少cm³？',
    opts:['900 cm³','1000 cm³','1300 cm³','1820 cm³'], ans:2,
    expl:'步驟①求內部尺寸（四邊各厚2cm）：長=30−2−2=26，闊=14−2−2=10，高=7−2=5（底板只減一次）；步驟②容量 = 26 × 10 × 5 = <strong class="correct-hl">1300 cm³</strong>' },
  { id:'6ubv15', text:'同上木箱容量1300cm³，已有700mL水，最少放幾粒64cm³玻璃珠才令水溢出？',
    opts:['9粒','10粒','11粒','12粒'], ans:1,
    expl:'步驟①剩餘空間=1300−700=600 cm³；步驟②試驗：600÷64=9餘24，放9粒=9×64=576&lt;600（未溢），放10粒=10×64=640&gt;600（溢出）；步驟③最少放 <strong class="correct-hl">10粒</strong>' },
  { id:'6ubv16', text:'容器25×12×16cm，水半滿（水深8cm），最多放幾個邊長3cm正方體水不溢出？',
    opts:['80個','85個','88個','90個'], ans:2,
    expl:'步驟①剩餘空間（水面以上）=25×12×(16−8)=25×12×8=2400 cm³；步驟②每個正方體體積=3³=27 cm³；步驟③2400÷27=88餘24，有餘數只取整數 → 最多放 <strong class="correct-hl">88個</strong>' },
],

/* ── 小學數學新思維 6下A：百分數的應用‧角和度‧圓周‧速率 ── */
book6da1: [
  // ── 第一部分：百分數的應用 ──
  { id:'6da01', text:'一班有 48 名學生，其中 30 名是女生。女生佔全班的百分之幾？',
    opts:['60%','62.5%','65%','66.7%'], ans:1,
    expl:'步驟①識題型：求A是B的幾%→ A÷B×100%；步驟②代入：30÷48×100%；步驟③計算：30÷48=0.625，×100% = <strong class="correct-hl">62.5%</strong>' },
  { id:'6da02', text:'果汁原價 $40，現售 $34。現售價是原價的百分之幾？',
    opts:['80%','82.5%','85%','87.5%'], ans:2,
    expl:'步驟①公式：現售÷原價×100%；步驟②代入：34÷40×100%；步驟③34÷40=0.85，×100% = <strong class="correct-hl">85%</strong>（已減去15%，所以售價是原價85%）' },
  { id:'6da03', text:'全校 600 名學生，男生佔 45%。男生有多少人？',
    opts:['240人','260人','270人','280人'], ans:2,
    expl:'步驟①識題型：求某數的N%→ 總數×百分數；步驟②代入：600×45%；步驟③=600×0.45 = <strong class="correct-hl">270人</strong>' },
  { id:'6da04', text:'一件衫原價 $250，加價 20% 後售出。售價是多少？',
    opts:['$260','$280','$300','$320'], ans:2,
    expl:'步驟①加價後售價=原價×(100%+增加%)；步驟②代入：250×(100%+20%)=250×120%；步驟③=250×1.2 = <strong class="correct-hl">$300</strong>（陷阱：250+20=$270，沒有乘百分比！）' },
  { id:'6da05', text:'商店有 500 件貨品，上午賣出 40%。上午賣出多少件？',
    opts:['150件','180件','200件','220件'], ans:2,
    expl:'步驟①賣出件數=總數×百分數；步驟②代入：500×40%；步驟③=500×0.4 = <strong class="correct-hl">200件</strong>' },
  { id:'6da06', text:'500 件貨品，上午賣出 40%（即 200 件），下午再賣出餘下的 25%，最後剩多少件？',
    opts:['200件','210件','225件','250件'], ans:2,
    expl:'步驟①上午後餘下：500-200=300件；步驟②下午賣出：300×25%=75件；步驟③最後剩：300-75 = <strong class="correct-hl">225件</strong>' },
  { id:'6da07', text:'李先生月薪 $12000，加薪 12.5%。加薪後每月工資是多少？',
    opts:['$13200','$13400','$13500','$14000'], ans:2,
    expl:'步驟①加薪後=原工資×(100%+12.5%)=12000×112.5%；步驟②12000×1=12000；12000×0.125=1500；步驟③12000+1500 = <strong class="correct-hl">$13500</strong>' },
  { id:'6da08', text:'籃球隊今年贏 18 場，輸 12 場。勝場佔總場次的百分之幾？',
    opts:['55%','60%','62.5%','66%'], ans:1,
    expl:'步驟①求總場次：18+12=30場；步驟②勝場百分比：18÷30×100%；步驟③=0.6×100% = <strong class="correct-hl">60%</strong>（陷阱：誤用18÷12=1.5，那是勝輸比，非百分比！）' },

],

/* ── 6下A 單元二：角和度 ── */
book6da2: [
  { id:'6da09', text:'下列哪個角是反角（Reflex Angle）？',
    opts:['45°','170°','250°','360°'], ans:2,
    expl:'步驟①角的分類：銳角 0°–90°，鈍角 90°–180°，反角 180°–360°（不含端點），周角=360°；步驟②逐項判斷：45°=銳角，170°=鈍角，360°=周角；步驟③250°介於180°至360°之間 → <strong class="correct-hl">250°=反角</strong>' },
  { id:'6da10', text:'三角形三個角的比例為 1:2:3，最大角是多少度？',
    opts:['60°','80°','90°','120°'], ans:2,
    expl:'步驟①三角形內角和=180°；步驟②份數：1+2+3=6份；步驟③每份=180°÷6=30°；步驟④最大角=3×30° = <strong class="correct-hl">90°</strong>（1:2:3的三角形必是直角三角形！）' },
  { id:'6da11', text:'一個角的反角是 295°，此角屬哪種角？',
    opts:['銳角（65°）','直角（90°）','鈍角（115°）','平角（180°）'], ans:0,
    expl:'步驟①本角=360°-反角=360°-295°=65°；步驟②65°介於0°至90°之間 → <strong class="correct-hl">銳角（65°）</strong>' },
  { id:'6da12', text:'四邊形四個角為 90°、85°、110° 和第四角，第四角是多少？',
    opts:['65°','70°','75°','85°'], ans:2,
    expl:'步驟①四邊形內角和=360°；步驟②第四角=360°-90°-85°-110°；步驟③=360°-285° = <strong class="correct-hl">75°</strong>' },
  { id:'6da13', text:'四邊形第四角為 75°，其反角是多少？',
    opts:['265°','275°','285°','295°'], ans:2,
    expl:'步驟①反角公式：反角=360°-本角；步驟②代入：360°-75° = <strong class="correct-hl">285°</strong>（反角必介於180°至360°之間 ✓）' },
  { id:'6da14', text:'等腰三角形頂角是 50°，底角是多少度？',
    opts:['60°','63°','65°','70°'], ans:2,
    expl:'步驟①等腰三角形兩底角相等；步驟②兩底角之和=180°-頂角=180°-50°=130°；步驟③每個底角=130°÷2 = <strong class="correct-hl">65°</strong>' },
  { id:'6da15', text:'角 x 的反角是其本身的 5 倍，求 x。',
    opts:['45°','55°','60°','72°'], ans:2,
    expl:'步驟①設方程：反角=360°-x；步驟②根據題意：360°-x=5x；步驟③移項：360°=6x；步驟④x=360°÷6 = <strong class="correct-hl">60°</strong>；驗算：反角=360°-60°=300°=5×60°✓' },
  { id:'6da16', text:'正五邊形每個內角是多少度？',
    opts:['100°','105°','108°','120°'], ans:2,
    expl:'步驟①公式：正n邊形每個內角=(n-2)×180°÷n；步驟②代入n=5：(5-2)×180°÷5；步驟③=3×180°÷5=540°÷5 = <strong class="correct-hl">108°</strong>' },

],

/* ── 6下A 單元三：圓周 ── */
book6da3: [
  { id:'6da17', text:'圓的直徑是 21 cm，求圓周。（取 π = <sup>22</sup>/<sub>7</sub>）',
    opts:['55 cm','60 cm','66 cm','72 cm'], ans:2,
    expl:'步驟①公式：C=π×d；步驟②代入d=21，π=<sup>22</sup>/<sub>7</sub>；步驟③先算21÷7=3，再×22；C = <strong class="correct-hl">66 cm</strong>' },
  { id:'6da18', text:'圓的圓周是 94.2 m，求半徑。（取 π = 3.14）',
    opts:['10 m','12 m','15 m','20 m'], ans:2,
    expl:'步驟①由C求d：d=C÷π=94.2÷3.14=30 m；步驟②半徑=直徑÷2=30÷2 = <strong class="correct-hl">15 m</strong>' },
  { id:'6da19', text:'半圓的直徑是 14 cm，求半圓形的周界。（取 π = <sup>22</sup>/<sub>7</sub>）',
    opts:['22 cm','28 cm','36 cm','44 cm'], ans:2,
    expl:'步驟①半圓弧長=圓周÷2=<sup>22</sup>/<sub>7</sub>×14÷2=22 cm；步驟②周界=弧+直徑=22+14 = <strong class="correct-hl">36 cm</strong>（陷阱：只答弧長22 cm，忘加直徑14 cm！）' },
  { id:'6da20', text:'車輪半徑 35 cm，向前滾動 11 m，轉了多少圈？（取 π = <sup>22</sup>/<sub>7</sub>）',
    opts:['3圈','4圈','5圈','6圈'], ans:2,
    expl:'步驟①圓周C=2×<sup>22</sup>/<sub>7</sub>×35=220 cm；步驟②統一單位：11 m=1100 cm；步驟③圈數=1100÷220 = <strong class="correct-hl">5圈</strong>' },
  { id:'6da21', text:'正方形（邊長 14 cm）四角各加四分之一圓弧，求圖形周界。（取 π = <sup>22</sup>/<sub>7</sub>）',
    opts:['44 cm','56 cm','100 cm','144 cm'], ans:0,
    expl:'步驟①四個¼弧合成一整圓：弧長=π×d=<sup>22</sup>/<sub>7</sub>×14=44 cm；步驟②四個¼圓弧取代正方形四邊，四邊不計入外周；答 = <strong class="correct-hl">44 cm</strong>（周界只有圓弧！）' },
  { id:'6da22', text:'鐘錶分針長 7 cm，一小時針尖走多少 cm？（取 π = <sup>22</sup>/<sub>7</sub>）',
    opts:['22 cm','36 cm','44 cm','56 cm'], ans:2,
    expl:'步驟①分針一小時轉一整圈；步驟②C=2×π×r=2×<sup>22</sup>/<sub>7</sub>×7；步驟③=2×22 = <strong class="correct-hl">44 cm</strong>（半徑=分針長=7 cm）' },
  { id:'6da23', text:'複合圖形：長方形（長 20 cm，闊 7 cm）兩端各接一個半圓，求周界。（取 π = <sup>22</sup>/<sub>7</sub>）',
    opts:['56 cm','58 cm','62 cm','66 cm'], ans:2,
    expl:'步驟①兩個半圓合為一整圓，直徑=闊=7 cm；C=<sup>22</sup>/<sub>7</sub>×7=22 cm；步驟②周界=兩條長邊+整圓周=20+20+22 = <strong class="correct-hl">62 cm</strong>（兩個寬邊被半圓替代，不計入！）' },

],

/* ── 6下A 單元四：速率 ── */
book6da4: [
  { id:'6da24', text:'2 小時 24 分鐘等於多少分鐘？',
    opts:['120分鐘','134分鐘','144分鐘','150分鐘'], ans:2,
    expl:'步驟①小時化分鐘：2小時=2×60=120分鐘；步驟②加上分鐘：120+24 = <strong class="correct-hl">144分鐘</strong>' },
  { id:'6da25', text:'貨車行駛 195 km，用了 2.5 小時，求平均速率（km/h）。',
    opts:['68 km/h','72 km/h','78 km/h','80 km/h'], ans:2,
    expl:'步驟①公式：速率=路程÷時間；步驟②代入：195÷2.5；步驟③=1950÷25 = <strong class="correct-hl">78 km/h</strong>' },
  { id:'6da26', text:'小明以 1.5 m/s 步行了 8 分鐘，走了多少米？',
    opts:['540 m','600 m','720 m','800 m'], ans:2,
    expl:'步驟①換算時間：8分鐘=8×60=480秒；步驟②公式：路程=速率×時間；步驟③1.5×480 = <strong class="correct-hl">720 m</strong>（陷阱：誤用1.5×8=12，忘換算秒！）' },
  { id:'6da27', text:'甲地到乙地 360 km，飛機以 480 km/h 飛行，需時多少分鐘？',
    opts:['40分鐘','45分鐘','50分鐘','60分鐘'], ans:1,
    expl:'步驟①時間=路程÷速率=360÷480=0.75小時；步驟②化分鐘：0.75×60 = <strong class="correct-hl">45分鐘</strong>' },
  { id:'6da28', text:'子明 8:15 出發以 60 m/min 步行，8:45 到達學校。學校距家多少米？',
    opts:['1200 m','1500 m','1800 m','2100 m'], ans:2,
    expl:'步驟①步行時間：8:45-8:15=30分鐘；步驟②路程=速率×時間=60×30 = <strong class="correct-hl">1800 m</strong>' },
],

/* ── 小學數學新思維 6下B：單元五 簡易方程 ── */
book6db5: [
  { id:'6db5-01', text:'解方程：<sup>3</sup>/<sub>4</sub>k + 2 = <sup>1</sup>/<sub>2</sub>k + 5，k = ？',
    opts:['k = 8','k = 12','k = 16','k = 20'], ans:1,
    expl:'步驟①兩邊乘 4 消分母：3k + 8 = 2k + 20；步驟②移項：3k − 2k = 20 − 8；步驟③k = <strong class="correct-hl">12</strong>' },
  { id:'6db5-02', text:'解方程：4(3p − 1) = 2(p + 10)，p = ？',
    opts:['p = 2','p = 2.4','p = 3','p = 4'], ans:1,
    expl:'步驟①展開括號：12p − 4 = 2p + 20；步驟②移項：10p = 24；步驟③p = 24 ÷ 10 = <strong class="correct-hl">2.4</strong>' },
  { id:'6db5-03', text:'解方程：(n − 1.5) ÷ 0.6 = 2<sup>1</sup>/<sub>2</sub>，n = ？',
    opts:['n = 1.5','n = 2.5','n = 3','n = 4'], ans:2,
    expl:'步驟①將 2½ 化成小數：2.5；步驟②兩邊 ×0.6：n − 1.5 = 2.5 × 0.6 = 1.5；步驟③n = 1.5 + 1.5 = <strong class="correct-hl">3</strong>' },
  { id:'6db5-04', text:'如果 F × (36% + 4%) = 2，求 3F − 1 的值。',
    opts:['9','11','14','17'], ans:2,
    expl:'步驟①化簡括號：F × 40% = 2；步驟②解 F：F = 2 ÷ 40% = 5；步驟③代入：3×5 − 1 = <strong class="correct-hl">14</strong>' },
  { id:'6db5-05', text:'以下哪道方程的解最大？',
    opts:['4W + 2W = 3','x÷3 + x÷6 = 5','20t − 12t = 4','9y − 5y = 2'], ans:1,
    expl:'步驟①逐一求解：A: W=0.5；B: 通分得 <sup>1</sup>/<sub>2</sub>x=5，x=10；C: t=0.5；D: y=0.5；步驟②比較四個解；步驟③最大解 x = <strong class="correct-hl">10（答案 B）</strong>' },
  { id:'6db5-06', text:'解方程：24p − 18p = <sup>2</sup>/<sub>3</sub>，p = ？',
    opts:['<sup>1</sup>/<sub>18</sub>','<sup>1</sup>/<sub>9</sub>','<sup>1</sup>/<sub>6</sub>','4'], ans:1,
    expl:'步驟①合併同類項：6p = <sup>2</sup>/<sub>3</sub>；步驟②分數 ÷ 整數：p = <sup>2</sup>/<sub>3</sub> × <sup>1</sup>/<sub>6</sub> = <sup>2</sup>/<sub>18</sub>；步驟③化簡：p = <strong class="correct-hl"><sup>1</sup>/<sub>9</sub></strong>' },
  { id:'6db5-07', text:'解方程：5 + P × 25% = 7，若 Q = 2P，求 Q + 3。',
    opts:['P=6，Q+3=15','P=8，Q+3=19','P=8，Q+3=21','P=10，Q+3=23'], ans:1,
    expl:'步驟①解 P：P × 25% = 2，P = 2 ÷ 25% = 8；步驟②求 Q：Q = 2×8 = 16；步驟③Q + 3 = <strong class="correct-hl">19</strong>' },
  { id:'6db5-08', text:'每人分 4 本剩 11 本，每人分 5 本缺 4 本，學生有多少人？書本共多少本？',
    opts:['13人，63本','15人，71本','16人，75本','20人，91本'], ans:1,
    expl:'步驟①設學生 y 人，兩種分法書本總數相等：4y + 11 = 5y − 4；步驟②解：y = <strong class="correct-hl">15 人</strong>；步驟③書本：4×15 + 11 = <strong class="correct-hl">71 本</strong>' },
  { id:'6db5-09', text:'長方形的長比闊多 6 cm，周界是 52 cm，求長方形的面積。',
    opts:['120 cm²','140 cm²','160 cm²','180 cm²'], ans:2,
    expl:'步驟①設闊 = w，長 = w+6，周界：2(w + w+6) = 52；步驟②4w = 40，w = 10，長 = 16；步驟③面積 = 10 × 16 = <strong class="correct-hl">160 cm²</strong>' },
  { id:'6db5-10', text:'相簿 72% 是彩色，黑白相片有 56 張，彩色比黑白多多少張？',
    opts:['總數200，相差84張','總數200，相差88張','總數220，相差90張','總數180，相差76張'], ans:1,
    expl:'步驟①黑白佔：100% − 72% = 28%；設總數 = y，y × 28% = 56，y = 200 張；步驟②彩色：144 張；步驟③相差：144 − 56 = <strong class="correct-hl">88 張</strong>' },
  { id:'6db5-11', text:'三姐弟年齡和 30 歲，哥比妹大 2 歲，妹比弟大 5 歲，三人各多少歲？',
    opts:['哥11、妹9、弟4','哥12、妹10、弟8','哥13、妹11、弟6','哥14、妹12、弟4'], ans:2,
    expl:'步驟①設妹 = y，哥 = y+2，弟 = y−5；步驟②列式：(y+2) + y + (y−5) = 30，y = 11；步驟③哥 = <strong class="correct-hl">13 歲</strong>，妹 = <strong class="correct-hl">11 歲</strong>，弟 = <strong class="correct-hl">6 歲</strong>' },
  { id:'6db5-12', text:'梯形上底 10 cm，高 18 cm，面積與邊長 24 cm 的正方形相同，求梯形下底。',
    opts:['42 cm','48 cm','54 cm','60 cm'], ans:2,
    expl:'步驟①正方形面積：24×24 = 576 cm²；步驟②設下底 = y，梯形方程：(10+y)×18÷2 = 576，9(10+y) = 576，10+y = 64；步驟③y = <strong class="correct-hl">54 cm</strong>' },
  { id:'6db5-13', text:'超市有員工 80 人，<sup>3</sup>/<sub>4</sub> 是女員工，加聘若干名女員工後女員工佔 80%，求加聘人數。',
    opts:['10人','15人','20人','25人'], ans:2,
    expl:'步驟①原女員工：80 × <sup>3</sup>/<sub>4</sub> = 60 人；步驟②設加聘 x 人：(60+x)÷(80+x) = 80%，交叉相乘：5(60+x) = 4(80+x)；步驟③300+5x = 320+4x，x = <strong class="correct-hl">20 人</strong>' },
  { id:'6db5-14', text:'圓形花圃圓周 44 m（π = <sup>22</sup>/<sub>7</sub>），求半徑及面積。',
    opts:['半徑7m，面積146m²','半徑7m，面積154m²','半徑14m，面積616m²','半徑3.5m，面積38.5m²'], ans:1,
    expl:'步驟①設半徑 r，圓周：2r × <sup>22</sup>/<sub>7</sub> = 44，r = 7 m；步驟②面積 = πr² = 7×7×<sup>22</sup>/<sub>7</sub>；步驟③面積 = <strong class="correct-hl">154 m²</strong>' },
],

/* ── 小學數學新思維 6下B：單元六 圓面積 ── */
book6db6: [
  { id:'6db6-01', text:'圓形水池直徑 28 m，求水池的面積。（π = <sup>22</sup>/<sub>7</sub>）',
    opts:['308 m²','616 m²','1232 m²','2464 m²'], ans:1,
    expl:'步驟①求半徑：28 ÷ 2 = 14 m；步驟②面積 = πr² = 14×14×<sup>22</sup>/<sub>7</sub>；步驟③面積 = <strong class="correct-hl">616 m²</strong>' },
  { id:'6db6-02', text:'圓形地毯圓周 62.8 m（π = 3.14），求地毯的半徑及面積。',
    opts:['半徑5m，面積78.5m²','半徑10m，面積314m²','半徑20m，面積1256m²','半徑10m，面積628m²'], ans:1,
    expl:'步驟①由圓周求半徑：2r × 3.14 = 62.8，r = 62.8 ÷ 6.28 = 10 m；步驟②面積 = πr² = 10×10×3.14；步驟③面積 = <strong class="correct-hl">314 m²</strong>' },
  { id:'6db6-03', text:'正方形邊長等於圓形直徑，均為 28 cm（π = <sup>22</sup>/<sub>7</sub>），求圓面積及正方形四角的陰影面積。',
    opts:['圓面積616，陰影100 cm²','圓面積616，陰影168 cm²','圓面積308，陰影476 cm²','圓面積1232，陰影448 cm²'], ans:1,
    expl:'步驟①圓半徑 = 14，圓面積 = 14×14×<sup>22</sup>/<sub>7</sub> = 616 cm²；步驟②正方形面積 = 28×28 = 784 cm²；步驟③陰影 = 784 − 616 = <strong class="correct-hl">168 cm²</strong>' },
  { id:'6db6-04', text:'圓形 A 半徑 5 cm，圓形 B 半徑是 A 的 3 倍（π = 3.14），求 B 的面積及 B 是 A 的幾倍。',
    opts:['235.5 cm²，3倍','706.5 cm²，9倍','2826 cm²，9倍','78.5 cm²，3倍'], ans:1,
    expl:'步驟①圓 B 半徑 = 5×3 = 15 cm；步驟②圓 B 面積 = 15×15×3.14 = <strong class="correct-hl">706.5 cm²</strong>；步驟③半徑擴大 n 倍，面積擴大 n²：3² = <strong class="correct-hl">9 倍</strong>' },
  { id:'6db6-05', text:'正方形木板邊長 20 cm，從中割出 4 個最大的相同圓形（2×2 排列），求剩下木板的面積。（π = 3.14）',
    opts:['68.6 cm²','86 cm²','114 cm²','157 cm²'], ans:1,
    expl:'步驟①2×2 排列，每圓直徑 = 20÷2 = 10 cm，半徑 = 5；步驟②4 個圓面積：4×5×5×3.14 = 314 cm²；步驟③剩下：400 − 314 = <strong class="correct-hl">86 cm²</strong>' },
  { id:'6db6-06', text:'扇形圓心角 270°，半徑 14 cm，求扇形面積。（π = <sup>22</sup>/<sub>7</sub>）',
    opts:['154 cm²','308 cm²','462 cm²','616 cm²'], ans:2,
    expl:'步驟①整圓面積 = 14×14×<sup>22</sup>/<sub>7</sub> = 616 cm²；步驟②扇形佔比 = 270° ÷ 360° = <sup>3</sup>/<sub>4</sub>；步驟③扇形面積 = 616 × <sup>3</sup>/<sub>4</sub> = <strong class="correct-hl">462 cm²</strong>' },
  { id:'6db6-07', text:'師傅從 66 cm × 14 cm 的長方形木板上割出 3 個最大的圓形，求剩下木板的面積。（π = <sup>22</sup>/<sub>7</sub>）',
    opts:['231 cm²','308 cm²','462 cm²','616 cm²'], ans:2,
    expl:'步驟①闊 14 cm 限制圓的大小：直徑 = 14，半徑 = 7；步驟②3 個圓面積：3×7×7×<sup>22</sup>/<sub>7</sub> = 462 cm²；步驟③剩下：66×14 − 462 = 924 − 462 = <strong class="correct-hl">462 cm²</strong>' },
],

custom: []
};

/* ════════════════════════════════════════════════
   MODULE META
   ════════════════════════════════════════════════ */
const MOD_NAMES = {
  integer:'整數運算礁區', fraction:'分數珊瑚礁', decimal:'小數潛水艙',
  percent:'百份數（混合）', pct_pfrac:'百分數化分數', pct_fracp:'分數化百份數',
  pct_pdec:'百份數化小數', pct_decp:'小數化百份數', pct_cmp:'比較大小',
  ratio:'比例珊瑚海',  algebra:'代數深溝',
  shape:'圖形寶藏室',    speed:'速率洋流道',   word:'文字題岩洞',
  data:'數據觀測站',    tsa:'呈分試挑戰',     wrong:'錯題重溫礁',
  mental:'混合速算特訓',
  book6ua1:'6上A① 小數除法', book6ua2:'6上A② 小數分數',
  book6ua3:'6上A③ 平均數',
  book6ub5:'6上B⑤ 百分數', book6ub6:'6上B⑥ 對稱', book6ub7:'6上B⑦ 容量和體積',
  book6da1:'6下A① 百分數的應用', book6da2:'6下A② 角和度',
  book6da3:'6下A③ 圓周', book6da4:'6下A④ 速率',
  book6db5:'6下B⑤ 簡易方程', book6db6:'6下B⑥ 圓面積'
};
const MOD_ICONS = {
  integer:'🔢', fraction:'🍕', decimal:'🔡',
  percent:'🌊', pct_pfrac:'💯', pct_fracp:'🍕', pct_pdec:'💯', pct_decp:'🔡', pct_cmp:'⚖️',
  ratio:'⚖️',
  algebra:'🔤', shape:'📐',   speed:'🐬',    word:'📝',   data:'📈',
  tsa:'🎯',    wrong:'🦀',   mental:'⚡',
  book6ua1:'➗', book6ua2:'🔄', book6ua3:'📊',
  book6ub5:'💯', book6ub6:'🔁', book6ub7:'🧊',
  book6da1:'📊', book6da2:'📐', book6da3:'⭕', book6da4:'🚀',
  book6db5:'✏️', book6db6:'⭕'
};
const MOD_XP = {
  integer:8, fraction:10, decimal:8,
  percent:10, pct_pfrac:10, pct_fracp:10, pct_pdec:10, pct_decp:10, pct_cmp:10,
  ratio:10,
  algebra:10, shape:10, speed:10, word:12, data:8, tsa:15, wrong:12, mental:12,
  book6ua1:10, book6ua2:10, book6ua3:10,
  book6ub5:10, book6ub6:10, book6ub7:10,
  book6da1:10, book6da2:10, book6da3:10, book6da4:10,
  book6db5:10, book6db6:10
};
const LV_THRESHOLDS = [0,100,250,450,700,1000,1400,1900,2500,3200,4000];

/* ════════════════════════════════════════════════
   GAME STATE
   ════════════════════════════════════════════════ */
let gs = {
  name: '',
  xp: 0, coins: 0, level: 1,
  streak: 0, lastLoginDate: '',
  dailyClaimed: false,
  sfx: true,
  pin: '1234',
  progress: {},   // { moduleKey: { done:N, correct:N } }
  wrongQ: [],     // [{ id, mod, q, ans, expl }]
};

/* ════════════════════════════════════════════════
   QUIZ STATE
   ════════════════════════════════════════════════ */
let qs = {
  mod: '', questions: [], idx: 0,
  sessionXP: 0, sessionCoins: 0, sessionCorrect: 0,
  combo: 0, timerMode: 0, timerInterval: null, timerLeft: 0,
  answered: false
};

/* ════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════ */
function init(){
  loadState();
  spawnLoadBubbles();
  setTimeout(()=>{
    showScreen('screen-dashboard');
    updateUI();
    checkStreak();
  }, 2800);
}

/* ════════════════════════════════════════════════
   PERSISTENCE
   ════════════════════════════════════════════════ */
function loadState(){
  try{
    const s = localStorage.getItem('hinson_math_gs');
    if(s) Object.assign(gs, JSON.parse(s));
    // load custom QB
    const cq = localStorage.getItem('hinson_math_custom');
    if(cq) QB.custom = JSON.parse(cq);
  }catch(e){}
}
function saveState(){
  try{
    localStorage.setItem('hinson_math_gs', JSON.stringify(gs));
    localStorage.setItem('hinson_math_custom', JSON.stringify(QB.custom));
  }catch(e){}
}

/* ════════════════════════════════════════════════
   DAILY ACTIVITY TRACKER
   ════════════════════════════════════════════════ */
let _appOpenTs = Date.now();
function _todayKey(){ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function _fmtHM(ts){ const d=new Date(ts); return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; }
function getDailyLog(){ try{ return JSON.parse(localStorage.getItem('hinson_daily_log')||'{}'); }catch(e){ return {}; } }
function _saveDailyLog(log){ try{ localStorage.setItem('hinson_daily_log',JSON.stringify(log)); }catch(e){} }
function logSession(name, icon, done, correct, startTs){
  const log=getDailyLog(); const k=_todayKey();
  if(!log[k]) log[k]={sessions:[],appMins:0};
  const mins=Math.max(1,Math.round((Date.now()-(startTs||Date.now()-60000))/60000));
  log[k].sessions.push({name,icon:icon||'📚',done,correct,time:_fmtHM(startTs||Date.now()),mins});
  const keys=Object.keys(log).sort(); if(keys.length>30) delete log[keys[0]];
  _saveDailyLog(log);
}
function _flushAppTime(){
  if(!_appOpenTs) return;
  const mins=Math.floor((Date.now()-_appOpenTs)/60000);
  if(mins<1){ return; }
  const log=getDailyLog(); const k=_todayKey();
  if(!log[k]) log[k]={sessions:[],appMins:0};
  log[k].appMins=(log[k].appMins||0)+mins;
  _saveDailyLog(log);
  _appOpenTs=Date.now();
}
document.addEventListener('visibilitychange',()=>{ if(document.hidden) _flushAppTime(); else _appOpenTs=Date.now(); });
window.addEventListener('beforeunload',_flushAppTime);
setInterval(_flushAppTime, 5*60*1000);

/* ════════════════════════════════════════════════
   SCREEN MANAGEMENT
   ════════════════════════════════════════════════ */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el = document.getElementById(id);
  if(el){ el.classList.add('active'); el.scrollTop=0; }
}

/* ════════════════════════════════════════════════
   UI UPDATE
   ════════════════════════════════════════════════ */
function updateUI(){
  document.getElementById('s-xp').textContent    = gs.xp;
  document.getElementById('s-coins').textContent = gs.coins;
  document.getElementById('s-lv').textContent    = gs.level;
  document.getElementById('streak-count').textContent = gs.streak;
  document.getElementById('player-name-display').textContent = gs.name || '深海探險家';

  // XP bar
  const lv  = gs.level;
  const cur = gs.xp - LV_THRESHOLDS[Math.min(lv-1, LV_THRESHOLDS.length-1)];
  const need= (LV_THRESHOLDS[Math.min(lv, LV_THRESHOLDS.length-1)] || 9999) - LV_THRESHOLDS[Math.min(lv-1, LV_THRESHOLDS.length-1)];
  const pct = Math.min(100, Math.round(cur/need*100));
  document.getElementById('xp-fill').style.width = pct+'%';
  document.getElementById('xp-label').textContent = `${gs.xp} XP → Lv.${lv+1}`;

  // Module progress bars
  Object.keys(QB).forEach(key=>{
    if(key==='custom') return;
    const bar = document.getElementById('pb-'+key);
    if(!bar) return;
    const p = gs.progress[key];
    if(!p) return;
    const total = QB[key].length;
    const pct = total>0 ? Math.round(p.done/total*100) : 0;
    bar.style.width = pct+'%';
  });

  // Daily button
  const db = document.getElementById('daily-btn');
  if(db) db.disabled = gs.dailyClaimed;
}

/* ════════════════════════════════════════════════
   STREAK CHECK
   ════════════════════════════════════════════════ */
function checkStreak(){
  const today = new Date().toDateString();
  if(gs.lastLoginDate === today) return;
  const yesterday = new Date(Date.now()-86400000).toDateString();
  if(gs.lastLoginDate === yesterday){
    gs.streak++;
  } else {
    gs.streak = 1;
  }
  gs.lastLoginDate = today;
  gs.dailyClaimed  = false;
  saveState();
  updateUI();
}

/* ════════════════════════════════════════════════
   MODULE LAUNCH
   ════════════════════════════════════════════════ */
function buildMentalQuiz(){
  const subs = ['sq','add','mul','dec','pair','conv','ratio'];
  let sel = [];
  for(const sub of subs){
    const pool = shuffle(QB.mental.filter(q=>q.sub===sub));
    sel.push(...pool.slice(0, 2));
  }
  return shuffle(sel);
}

function launchModule(key){
  if(key === 'wrong'){
    showWrongList();
    return;
  }

  let pool = [];
  if(key === 'mental'){
    pool = buildMentalQuiz();
  } else if(key === 'tsa'){
    pool = shuffle([...QB.tsa, ...QB.custom.filter(q=>q.mod==='tsa')]).slice(0, 10);
  } else {
    const raw = [...(QB[key]||[]), ...QB.custom.filter(q=>q.mod===key)];
    pool = shuffle(raw).slice(0, 10);
  }

  if(!pool.length){
    alert('此海域暫無題目！請在家長專區加入題目。');
    return;
  }

  qs = {
    mod: key, questions: pool, idx: 0,
    sessionXP: 0, sessionCoins: 0, sessionCorrect: 0,
    combo: 0, timerMode: 0, timerInterval: null, timerLeft: 0,
    answered: false, startTs: Date.now()
  };

  document.getElementById('quiz-mod-name').textContent = MOD_NAMES[key] || key;
  document.getElementById('qlive-xp').textContent   = '0';
  document.getElementById('qlive-coins').textContent = '0';
  document.getElementById('timer-toggle-btn').textContent = '⏱ 關';
  document.getElementById('timer-wrap').classList.add('hidden');
  document.getElementById('combo-badge').classList.add('hidden');

  showScreen('screen-quiz');
  renderQuestion();
}

/* ════════════════════════════════════════════════
   RENDER QUESTION
   ════════════════════════════════════════════════ */
function renderQuestion(){
  const q = qs.questions[qs.idx];
  qs.answered = false;

  document.getElementById('quiz-prog').textContent = `${qs.idx+1} / ${qs.questions.length}`;
  document.getElementById('q-num-tag').textContent = `第 ${qs.idx+1} 題`;

  // Module type tag
  const tag = document.getElementById('q-type-tag');
  tag.textContent = q.tag || ((MOD_ICONS[qs.mod]||'') + ' ' + (MOD_NAMES[qs.mod]||''));

  // Context panel
  const pp = document.getElementById('passage-panel');
  const pt = document.getElementById('passage-text');
  if(q.context){
    pp.classList.remove('hidden');
    pt.innerHTML = renderFrac(q.context);
  } else {
    pp.classList.add('hidden');
  }

  document.getElementById('q-text').innerHTML = renderFrac(q.text);

  // hide fill section
  document.getElementById('fill-section').classList.add('hidden');
  document.getElementById('fill-input').value = '';

  // hide result + teacher
  document.getElementById('result-banner').classList.add('hidden');
  document.getElementById('teacher-panel').classList.add('hidden');

  // Build options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';

  if(q.type === 'input'){
    grid.classList.add('hidden');
    document.getElementById('fill-section').classList.remove('hidden');
    setTimeout(()=>document.getElementById('fill-input').focus(),200);
  } else {
    grid.classList.remove('hidden');
    const letters = ['A','B','C','D'];
    q.opts.forEach((opt,i)=>{
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${renderFrac(opt)}`;
      btn.onclick = ()=>checkAnswer(i);
      grid.appendChild(btn);
    });
  }

  // Timer
  if(qs.timerMode === 1) startTimer(45);
  else if(qs.timerMode === 2) startTimer(30);
}

/* ════════════════════════════════════════════════
   ANSWER CHECKING
   ════════════════════════════════════════════════ */
function isAnswerCorrect(input, expected){
  const inp = String(input).trim();
  const exp = String(expected).trim();
  const stripPct = s => s.replace(/%/g,'').trim();
  const i = stripPct(inp), e = stripPct(exp);
  const fracRe = /^(\d+)\/(\d+)$/;
  const fi = fracRe.exec(i), fe = fracRe.exec(e);
  if(fi || fe){
    const v1 = fi ? parseInt(fi[1])/parseInt(fi[2]) : parseFloat(i);
    const v2 = fe ? parseInt(fe[1])/parseInt(fe[2]) : parseFloat(e);
    if(!isNaN(v1) && !isNaN(v2)) return Math.abs(v1-v2) < 0.0001;
  }
  const n1 = parseFloat(i), n2 = parseFloat(e);
  if(!isNaN(n1) && !isNaN(n2)) return Math.abs(n1-n2) < 0.0001;
  return i.toLowerCase() === e.toLowerCase();
}

function checkAnswer(idx){
  if(qs.answered) return;
  qs.answered = true;
  stopTimer();

  const q = qs.questions[qs.idx];
  let isCorrect;
  if(idx === 'correct')      isCorrect = true;
  else if(idx === 'wrong')   isCorrect = false;
  else if(idx === -99)       isCorrect = false;
  else                       isCorrect = (idx === q.ans);

  // Disable MCQ options (input questions have no opts)
  if(q.type !== 'input'){
    document.querySelectorAll('.opt-btn').forEach((btn,i)=>{
      btn.disabled = true;
      if(i === q.ans) btn.classList.add('correct');
      else if(i === idx && !isCorrect) btn.classList.add('wrong');
    });
  }

  // Result banner
  const banner = document.getElementById('result-banner');
  const icon   = document.getElementById('result-icon');
  const msg    = document.getElementById('result-msg');
  const earn   = document.getElementById('result-earn');
  banner.classList.remove('hidden');

  if(isCorrect){
    qs.combo++;
    qs.sessionCorrect++;
    const baseXP = MOD_XP[qs.mod] || 10;
    const comboBonus = qs.combo >= 3 ? Math.floor(baseXP*0.5) : 0;
    const timerBonus = qs.timerLeft > 20 ? 3 : 0;
    const totalXP    = baseXP + comboBonus + timerBonus;
    const coins      = Math.floor(totalXP/2);

    qs.sessionXP     += totalXP;
    qs.sessionCoins  += coins;
    document.getElementById('qlive-xp').textContent    = qs.sessionXP;
    document.getElementById('qlive-coins').textContent = qs.sessionCoins;

    icon.textContent = '✅';
    msg.textContent  = isCorrect ? (qs.combo>=3?'🔥 連擊答對！':'答對了！🎉') : '';
    earn.textContent = `+${totalXP} XP  +${coins} 🐚${comboBonus?'  🔥 連擊獎勵':''}`;

    if(qs.combo>=3){
      const cb = document.getElementById('combo-badge');
      cb.textContent = `🔥 ${qs.combo}連擊！`;
      cb.classList.remove('hidden');
    }

    if(gs.sfx) playBeep(880,0.1,'sine');
    spawnParticles(true);

    if(qs.timerLeft > 20){
      document.getElementById('timer-bonus').classList.remove('hidden');
    }
  } else {
    qs.combo = 0;
    document.getElementById('combo-badge').classList.add('hidden');
    icon.textContent = '❌';
    msg.textContent  = '答錯了！看看解題吧 👇';
    earn.textContent = '';
    if(gs.sfx) playBeep(220,0.15,'sawtooth');

    // Add to wrong list
    if(!gs.wrongQ.find(w=>w.id===q.id)){
      const wrongAns = q.type==='input' ? String(q.ans) : (q.opts ? q.opts[q.ans] : String(q.ans));
      gs.wrongQ.push({ id:q.id, mod:qs.mod, q:q.text, ans:wrongAns, expl:q.expl||'' });
      if(gs.wrongQ.length>100) gs.wrongQ.shift();
    }
  }

  // Teacher panel
  const tp = document.getElementById('teacher-panel');
  const tb = document.getElementById('teacher-body');
  const ww = document.getElementById('wrong-why');
  tp.classList.remove('hidden');
  const fallback = isCorrect ? '很好！答案正確。'
    : `正確答案是：<strong class="correct-hl">${q.type==='input' ? q.ans : (q.opts ? q.opts[q.ans] : q.ans)}</strong>`;
  tb.innerHTML  = renderFrac(formatExpl(q.expl || fallback));
  ww.innerHTML  = '';

  // Progress
  if(!gs.progress[qs.mod]) gs.progress[qs.mod] = { done:0, correct:0 };
  gs.progress[qs.mod].done++;
  if(isCorrect) gs.progress[qs.mod].correct++;

  saveState();
}

function submitFill(){
  if(qs.answered) return;
  const val = document.getElementById('fill-input').value.trim();
  if(!val){ alert('請填寫答案'); return; }

  const q = qs.questions[qs.idx];
  const correct = isAnswerCorrect(val, q.ans);
  document.getElementById('fill-section').classList.add('hidden');
  checkAnswer(correct ? 'correct' : 'wrong');
}

/* ════════════════════════════════════════════════
   ADVANCE / END QUIZ
   ════════════════════════════════════════════════ */
function advanceQ(){
  document.getElementById('timer-bonus').classList.add('hidden');
  qs.idx++;
  if(qs.idx >= qs.questions.length){
    endQuiz();
  } else {
    renderQuestion();
  }
}

function endQuiz(){
  stopTimer();
  logSession(MOD_NAMES[qs.mod]||qs.mod, MOD_ICONS[qs.mod]||'📚', qs.questions.length, qs.sessionCorrect, qs.startTs);
  addXP(qs.sessionXP);
  addCoins(qs.sessionCoins);

  const ds = document.getElementById('done-stats');
  ds.innerHTML = `
    <div class="done-row"><span class="done-row-label">答題數</span><span class="done-row-val">${qs.questions.length}</span></div>
    <div class="done-row"><span class="done-row-label">答對數</span><span class="done-row-val">${qs.sessionCorrect}</span></div>
    <div class="done-row"><span class="done-row-label">正確率</span><span class="done-row-val">${Math.round(qs.sessionCorrect/qs.questions.length*100)}%</span></div>
    <div class="done-row"><span class="done-row-label">獲得XP</span><span class="done-row-val">+${qs.sessionXP} 💎</span></div>
    <div class="done-row"><span class="done-row-label">獲得貝殼</span><span class="done-row-val">+${qs.sessionCoins} 🐚</span></div>
  `;
  openModal('modal-done');
  updateUI();
}

function retryModule(){
  closeModal('modal-done');
  launchModule(qs.mod);
}

/* ════════════════════════════════════════════════
   XP / COINS / LEVEL
   ════════════════════════════════════════════════ */
function addXP(amt){
  const prevLv = gs.level;
  gs.xp += amt;
  while(gs.level < LV_THRESHOLDS.length && gs.xp >= LV_THRESHOLDS[gs.level]){
    gs.level++;
  }
  if(gs.level > prevLv){
    document.getElementById('new-lv').textContent = gs.level;
    openModal('modal-levelup');
  }
  saveState();
}
function addCoins(amt){
  gs.coins += amt;
  saveState();
}

/* ════════════════════════════════════════════════
   TIMER
   ════════════════════════════════════════════════ */
function cycleTimer(){
  qs.timerMode = (qs.timerMode + 1) % 3;
  const btn = document.getElementById('timer-toggle-btn');
  const wrap= document.getElementById('timer-wrap');
  if(qs.timerMode===0){ btn.textContent='⏱ 關'; wrap.classList.add('hidden'); stopTimer(); }
  else if(qs.timerMode===1){ btn.textContent='⏱ 45s'; wrap.classList.remove('hidden'); if(qs.answered===false) startTimer(45); }
  else { btn.textContent='⏱ 30s'; wrap.classList.remove('hidden'); if(qs.answered===false) startTimer(30); }
}

function startTimer(secs){
  stopTimer();
  qs.timerLeft = secs;
  document.getElementById('timer-fill').style.transition='none';
  document.getElementById('timer-fill').style.width='100%';
  document.getElementById('timer-label').textContent = secs+'s';
  document.getElementById('timer-bonus').classList.add('hidden');
  setTimeout(()=>{
    document.getElementById('timer-fill').style.transition='width '+secs+'s linear';
    document.getElementById('timer-fill').style.width='0%';
  },50);
  qs.timerInterval = setInterval(()=>{
    qs.timerLeft--;
    document.getElementById('timer-label').textContent = qs.timerLeft+'s';
    if(qs.timerLeft<=0){
      stopTimer();
      if(!qs.answered) checkAnswer(-99);
    }
  },1000);
}

function stopTimer(){
  if(qs.timerInterval){ clearInterval(qs.timerInterval); qs.timerInterval=null; }
}

/* ════════════════════════════════════════════════
   DAILY REWARD
   ════════════════════════════════════════════════ */
function tryShowDaily(){
  if(gs.dailyClaimed){ alert('今天的獎勵已領取！明天再來吧 🌊'); return; }
  document.getElementById('daily-streak-num').textContent = gs.streak;
  const xpR   = 20 + (gs.streak-1)*5;
  const coinR = 10 + (gs.streak-1)*3;
  document.getElementById('reward-cards').innerHTML = `
    <div class="reward-card"><div class="reward-card-icon">💎</div><div class="reward-card-val">+${xpR}</div><div class="reward-card-label">XP</div></div>
    <div class="reward-card"><div class="reward-card-icon">🐚</div><div class="reward-card-val">+${coinR}</div><div class="reward-card-label">貝殼</div></div>
    <div class="reward-card"><div class="reward-card-icon">🔥</div><div class="reward-card-val">${gs.streak}</div><div class="reward-card-label">連續天</div></div>
  `;
  openModal('modal-daily');
}

function claimDaily(){
  const xpR   = 20 + (gs.streak-1)*5;
  const coinR = 10 + (gs.streak-1)*3;
  addXP(xpR);
  addCoins(coinR);
  gs.dailyClaimed = true;
  saveState();
  closeModal('modal-daily');
  updateUI();
  spawnParticles(true);
}

/* ════════════════════════════════════════════════
   EXIT QUIZ
   ════════════════════════════════════════════════ */
function confirmExitQuiz(){
  if(qs.answered && qs.idx >= qs.questions.length-1){
    doExitQuiz(); return;
  }
  openModal('modal-confirm-exit');
}
function doExitQuiz(){
  stopTimer();
  closeModal('modal-confirm-exit');
  showScreen('screen-dashboard');
  updateUI();
}

/* ════════════════════════════════════════════════
   SETTINGS
   ════════════════════════════════════════════════ */
function openSettingsModal(){
  document.getElementById('name-input').value = gs.name;
  document.getElementById('sfx-check').checked = gs.sfx;
  document.getElementById('new-pin-input').value = '';
  openModal('modal-settings');
}
function applySettings(){
  const n = document.getElementById('name-input').value.trim();
  if(n) gs.name = n;
  gs.sfx = document.getElementById('sfx-check').checked;
  const np = document.getElementById('new-pin-input').value.trim();
  if(np && /^\d{4}$/.test(np)) gs.pin = np;
  saveState();
  closeModal('modal-settings');
  updateUI();
}

/* ════════════════════════════════════════════════
   PARENT MODE
   ════════════════════════════════════════════════ */
function openParentPin(){
  document.getElementById('pin-input').value='';
  openModal('modal-parent-pin');
}
function verifyPin(){
  const p = document.getElementById('pin-input').value.trim();
  if(p === gs.pin){
    closeModal('modal-parent-pin');
    showScreen('screen-parent');
    switchPTab('report');
  } else {
    document.getElementById('pin-input').value='';
    document.getElementById('pin-input').placeholder='密碼錯誤，再試';
    if(gs.sfx) playBeep(180,0.15,'sawtooth');
  }
}

function switchPTab(tab){
  document.getElementById('ptab-report-btn').classList.toggle('active', tab==='report');
  document.getElementById('ptab-qbank-btn').classList.toggle('active', tab==='qbank');
  document.getElementById('parent-body').classList.toggle('hidden', tab!=='report');
  document.getElementById('parent-qb-body').classList.toggle('hidden', tab!=='qbank');
  if(tab==='report') renderParentReport();
  if(tab==='qbank')  renderCQB();
}

function renderParentReport(){
  const body = document.getElementById('parent-body');
  const totalDone    = Object.values(gs.progress).reduce((s,p)=>s+p.done,0);
  const totalCorrect = Object.values(gs.progress).reduce((s,p)=>s+p.correct,0);
  const acc = totalDone>0 ? Math.round(totalCorrect/totalDone*100) : 0;

  let rows = '';
  Object.keys(QB).forEach(key=>{
    if(key==='custom') return;
    const p = gs.progress[key]||{done:0,correct:0};
    const total = QB[key].length;
    const pct   = total>0?Math.round(p.done/total*100):0;
    const a     = p.done>0?Math.round(p.correct/p.done*100):0;
    rows += `<div class="report-mod-row">
      <span class="mod-icon">${MOD_ICONS[key]||'📚'}</span>
      <div class="report-mod-info">
        <div class="report-mod-name">${MOD_NAMES[key]}</div>
        <div class="report-mod-bar-wrap"><div class="report-mod-bar" style="width:${pct}%"></div></div>
      </div>
      <div class="report-mod-stat">${p.correct}/${p.done} (${a}%)</div>
    </div>`;
  });

  // Daily activity summary
  const dlog=getDailyLog(); const dk=_todayKey();
  const todayD=dlog[dk]||{sessions:[],appMins:0};
  const todayMins=(todayD.appMins||0)+Math.round((Date.now()-_appOpenTs)/60000);
  const timeStr=todayMins>=60?`${Math.floor(todayMins/60)}小時${todayMins%60}分鐘`:(todayMins>0?`${todayMins}分鐘`:'少於1分鐘');
  const sessRows=todayD.sessions.length?todayD.sessions.map(s=>`
    <div class="act-row">
      <span class="act-time">${s.time}</span>
      <span class="act-name">${s.icon} ${s.name}</span>
      <span class="act-score">${s.correct}/${s.done} 正確 · ${s.mins}分鐘</span>
    </div>`).join(''):`<div class="act-empty">今日未有練習紀錄</div>`;
  const pastKeys=Object.keys(dlog).sort().filter(k=>k!==dk).slice(-6).reverse();
  const histRows=pastKeys.length?pastKeys.map(k=>{
    const d=dlog[k]; const m=d.appMins||0;
    const mods=[...new Set(d.sessions.map(s=>s.name))].slice(0,2).join('、');
    return `<div class="act-hist-row"><span class="act-hist-date">${k}</span><span class="act-hist-info">${m}分鐘${mods?' · '+mods:''}</span></div>`;
  }).join(''):`<div class="act-empty">未有過去紀錄</div>`;

  body.innerHTML = `
    <div class="act-section">
      <div class="act-section-hd">📅 今日 (${dk}) · ⏱ 使用時間：${timeStr}</div>
      ${sessRows}
    </div>
    <div class="act-section" style="margin-top:12px">
      <div class="act-section-hd">📊 最近7天</div>
      ${histRows}
    </div>
    <div class="act-section" style="margin-top:12px">
      <div class="act-section-hd">📈 整體成績</div>
      <div class="report-stat-grid" style="margin:10px 0">
        <div class="report-stat-box"><div class="report-stat-val">${totalDone}</div><div class="report-stat-label">總答題數</div></div>
        <div class="report-stat-box"><div class="report-stat-val">${acc}%</div><div class="report-stat-label">整體正確率</div></div>
        <div class="report-stat-box"><div class="report-stat-val">${gs.xp}</div><div class="report-stat-label">總XP</div></div>
        <div class="report-stat-box"><div class="report-stat-val">${gs.level}</div><div class="report-stat-label">目前等級</div></div>
      </div>
      <div class="report-mod-list">${rows}</div>
    </div>
  `;
}

/* ════════════════════════════════════════════════
   REPORT SCREEN
   ════════════════════════════════════════════════ */
function showReport(){
  const body = document.getElementById('report-body');
  const totalDone    = Object.values(gs.progress).reduce((s,p)=>s+p.done,0);
  const totalCorrect = Object.values(gs.progress).reduce((s,p)=>s+p.correct,0);
  const acc = totalDone>0 ? Math.round(totalCorrect/totalDone*100) : 0;

  let rows = '';
  Object.keys(QB).forEach(key=>{
    if(key==='custom') return;
    const p = gs.progress[key]||{done:0,correct:0};
    const total = QB[key].length;
    const pct   = total>0?Math.round(p.done/total*100):0;
    const a     = p.done>0?Math.round(p.correct/p.done*100):0;
    rows += `<div class="report-mod-row">
      <span class="mod-icon">${MOD_ICONS[key]||'📚'}</span>
      <div class="report-mod-info">
        <div class="report-mod-name">${MOD_NAMES[key]}</div>
        <div class="report-mod-bar-wrap"><div class="report-mod-bar" style="width:${pct}%"></div></div>
      </div>
      <div class="report-mod-stat">${p.correct}/${p.done}</div>
    </div>`;
  });

  body.innerHTML = `
    <div class="report-stat-grid" style="margin-bottom:12px">
      <div class="report-stat-box"><div class="report-stat-val">${totalDone}</div><div class="report-stat-label">總答題數</div></div>
      <div class="report-stat-box"><div class="report-stat-val">${acc}%</div><div class="report-stat-label">正確率</div></div>
      <div class="report-stat-box"><div class="report-stat-val">${gs.xp}</div><div class="report-stat-label">XP 💎</div></div>
      <div class="report-stat-box"><div class="report-stat-val">${gs.coins}</div><div class="report-stat-label">貝殼 🐚</div></div>
    </div>
    <div class="report-mod-list">${rows}</div>
  `;
  showScreen('screen-report');
}

/* ════════════════════════════════════════════════
   WRONG QUESTIONS
   ════════════════════════════════════════════════ */
function showWrongList(){
  const body = document.getElementById('wrong-body');
  if(!gs.wrongQ.length){
    body.innerHTML = '<div class="wrong-empty">🐠 暫無錯題！繼續加油！</div>';
  } else {
    body.innerHTML = gs.wrongQ.map(w=>`
      <div class="wrong-card">
        <div class="wrong-card-q">${MOD_ICONS[w.mod]||''} ${renderFrac(w.q)}</div>
        <div class="wrong-card-a">✅ 正確答案：${renderFrac(w.ans)}</div>
        <div class="wrong-card-expl">${renderFrac(w.expl||'')}</div>
      </div>
    `).join('');
  }
  showScreen('screen-wrong');
}

/* ════════════════════════════════════════════════
   CUSTOM QUESTION BANK
   ════════════════════════════════════════════════ */
function renderCQB(){
  document.getElementById('cqb-count').textContent = QB.custom.length;
  const list = document.getElementById('cqb-list');
  if(!QB.custom.length){
    list.innerHTML = '<p style="font-size:0.82rem;color:var(--text-dim);padding:12px 0">暫無自訂題目，點擊「手動新增」加入題目。</p>';
    return;
  }
  list.innerHTML = QB.custom.map((q,i)=>`
    <div class="cqb-item">
      <div class="cqb-item-text">[${MOD_ICONS[q.mod]||''}${q.mod}] ${q.text}</div>
      <div class="cqb-item-actions">
        <button class="cqb-del-btn" onclick="deleteCustomQ(${i})">🗑️</button>
      </div>
    </div>
  `).join('');
}

function openQEditor(id){
  document.getElementById('qe-text').value='';
  document.getElementById('qe-opt0').value='';
  document.getElementById('qe-opt1').value='';
  document.getElementById('qe-opt2').value='';
  document.getElementById('qe-opt3').value='';
  document.getElementById('qe-expl').value='';
  document.getElementById('qe-edit-id').value = id||'';
  document.querySelectorAll('input[name="qe-ans"]').forEach(r=>r.checked=false);
  openModal('modal-q-editor');
}

function saveCustomQ(){
  const text = document.getElementById('qe-text').value.trim();
  const opts = [
    document.getElementById('qe-opt0').value.trim(),
    document.getElementById('qe-opt1').value.trim(),
    document.getElementById('qe-opt2').value.trim(),
    document.getElementById('qe-opt3').value.trim(),
  ];
  const ansEl = document.querySelector('input[name="qe-ans"]:checked');
  const expl  = document.getElementById('qe-expl').value.trim();
  const mod   = document.getElementById('qe-type').value;

  if(!text){ alert('請輸入題目'); return; }
  if(opts.some(o=>!o)){ alert('請填寫所有選項'); return; }
  if(!ansEl){ alert('請選擇正確答案'); return; }

  const q = { id:'c'+Date.now(), mod, text, opts, ans:parseInt(ansEl.value), expl };
  QB.custom.push(q);
  saveState();
  closeModal('modal-q-editor');
  renderCQB();
}

function deleteCustomQ(i){
  if(!confirm('確定刪除這道題目？')) return;
  QB.custom.splice(i,1);
  saveState();
  renderCQB();
}

/* ════════════════════════════════════════════════
   DATA RESET
   ════════════════════════════════════════════════ */
function doResetData(){
  gs = { name:'', xp:0, coins:0, level:1, streak:0, lastLoginDate:'', dailyClaimed:false, sfx:true, pin:'1234', progress:{}, wrongQ:[] };
  QB.custom = [];
  saveState();
  closeModal('modal-confirm-clear');
  closeModal('modal-settings');
  updateUI();
  alert('已清除所有資料！');
}

/* ════════════════════════════════════════════════
   MODAL HELPERS
   ════════════════════════════════════════════════ */
function openModal(id){
  const el = document.getElementById(id);
  if(el) el.classList.remove('hidden');
}
function closeModal(id){
  const el = document.getElementById(id);
  if(el) el.classList.add('hidden');
}

/* ════════════════════════════════════════════════
   AUDIO
   ════════════════════════════════════════════════ */
let audioCtx = null;
function getAudioCtx(){
  if(!audioCtx) try{ audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){}
  return audioCtx;
}
function playBeep(freq, dur, type){
  try{
    const ctx = getAudioCtx(); if(!ctx) return;
    const osc = ctx.createOscillator();
    const gain= ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type||'sine'; osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+dur);
    osc.start(); osc.stop(ctx.currentTime+dur);
  }catch(e){}
}

/* ════════════════════════════════════════════════
   PARTICLES
   ════════════════════════════════════════════════ */
function spawnParticles(good){
  const host = document.getElementById('particles');
  const colors = good
    ? ['#00e5ff','#00c8d4','#ffd700','#a5ffba']
    : ['#ff5252','#ff7f7f'];
  for(let i=0;i<12;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 6+Math.random()*8;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      left:${20+Math.random()*60}%;
      top:${30+Math.random()*40}%;
      --tx:${(Math.random()-0.5)*160}px;
      --ty:${-60-Math.random()*120}px;
    `;
    host.appendChild(p);
    setTimeout(()=>p.remove(), 900);
  }
}

function spawnLoadBubbles(){
  const host = document.getElementById('load-bubbles');
  if(!host) return;
  for(let i=0;i<12;i++){
    const b = document.createElement('div');
    b.className = 'bubble-anim';
    const size = 6+Math.random()*20;
    b.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      --dur:${6+Math.random()*8}s;
      --delay:${Math.random()*6}s;
      --dx:${(Math.random()-0.5)*40}px;
    `;
    host.appendChild(b);
  }
}

/* ════════════════════════════════════════════════
   UTILITIES
   ════════════════════════════════════════════════ */
function formatExpl(s){
  if(!s) return s;
  const nums = ['一','二','三','四','五','六'];
  const cirs = ['①','②','③','④','⑤','⑥'];
  // ；步驟② → <br>第二步：  (steps 2+)
  cirs.forEach((c, i) => {
    s = s.replace(new RegExp('；步驟' + c, 'g'), '<br>第' + nums[i] + '步：');
  });
  // 步驟① (at start, no leading ；) → 第一步：
  cirs.forEach((c, i) => {
    s = s.replace(new RegExp('步驟' + c, 'g'), '第' + nums[i] + '步：');
  });
  return s;
}

function renderFrac(html){
  if(!html) return html;
  // Convert <sup>N</sup>/<sub>D</sub> → proper fraction with horizontal bar
  return html.replace(/<sup>([^<]+)<\/sup>\/<sub>([^<]+)<\/sub>/g,
    '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
}

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
