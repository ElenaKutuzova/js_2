const filterel = {
    template:
    `<section class="filter">
    <details class="filter-filter">
        <summary class="filter-filter-button"><span>FILTER</span>
            <svg width="15" height="10" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" />
            </svg>
        </summary>
        <div class="filter-drop">
            <details class="filter-drop__child">
                <summary class="filter-drop__drop">category</summary>
                <ul class="filter-drop__drop-list">
                    <li class="filter-drop__drop-list-item">Accessories</li>
                    <li class="filter-drop__drop-list-item">Bags</li>
                    <li class="filter-drop__drop-list-item">Denim</li>
                    <li class="filter-drop__drop-list-item">Hoodies & Sweatshirts</li>
                    <li class="filter-drop__drop-list-item">Jackets & Coats</li>
                    <li class="filter-drop__drop-list-item">Polos</li>
                    <li class="filter-drop__drop-list-item">Shirts</li>
                    <li class="filter-drop__drop-list-item">Shoes</li>
                    <li class="filter-drop__drop-list-item">Sweaters & Knits</li>
                    <li class="filter-drop__drop-list-item">T-Shirts</li>
                    <li class="filter-drop__drop-list-item">Tanks</li>         
                    </ul>
            </details>
            <details class="filter-drop__child">
                <summary class="filter-drop__drop">brand</summary>
                <ul class="filter-drop__drop-list">
                    <li class="filter-drop__drop-list-item">Accessories</li>
                    <li class="filter-drop__drop-list-item">Bags</li>
                    <li class="filter-drop__drop-list-item">Denim</li>
                    <li class="filter-drop__drop-list-item">Hoodies & Sweatshirts</li>
                    <li class="filter-drop__drop-list-item">Jackets & Coats</li>
                    <li class="filter-drop__drop-list-item">Polos</li>
                    <li class="filter-drop__drop-list-item">Shirts</li>
                    <li class="filter-drop__drop-list-item">Shoes</li>
                    <li class="filter-drop__drop-list-item">Sweaters & Knits</li>
                    <li class="filter-drop__drop-list-item">T-Shirts</li>
                    <li class="filter-drop__drop-list-item">Tanks</li>         
                    </ul>
            </details>
            <details class="filter-drop__child">
                <summary class="filter-drop__drop">designer</summary>
                <ul class="filter-drop__drop-list">
                    <li class="filter-drop__drop-list-item">Accessories</li>
                    <li class="filter-drop__drop-list-item">Bags</li>
                    <li class="filter-drop__drop-list-item">Denim</li>
                    <li class="filter-drop__drop-list-item">Hoodies & Sweatshirts</li>
                    <li class="filter-drop__drop-list-item">Jackets & Coats</li>
                    <li class="filter-drop__drop-list-item">Polos</li>
                    <li class="filter-drop__drop-list-item">Shirts</li>
                    <li class="filter-drop__drop-list-item">Shoes</li>
                    <li class="filter-drop__drop-list-item">Sweaters & Knits</li>
                    <li class="filter-drop__drop-list-item">T-Shirts</li>
                    <li class="filter-drop__drop-list-item">Tanks</li>         
                    </ul>
            </details>
        </div>
    </details>
    <div class="choice-box">
        <details class="choice">
            <summary class="choice-item">
                TRENDING NOW 
            </summary>
        </details> 
        <details class="choice">
            <summary class="choice-item">
                SIZE 
            </summary>
            <ul class="choice-list">
                <li class="choice-checkbox"> <input type="checkbox" name="XS" ><span>xs</span> </li>
                <li class="choice-checkbox"><input type="checkbox"  name="S" ><span>s</span></li>
                <li class="choice-checkbox"><input type="checkbox"  name="m" ><span>m</span></li>
                <li class="choice-checkbox"><input type="checkbox"  name="l" ><span>l</span></li>
            </ul>
        </details>
        <details class="choice">
            <summary class="choice-item">
                PRICE 
            </summary>
        </details>
        </div>
</section>

    `
}