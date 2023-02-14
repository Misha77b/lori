import { Typography, Container, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const About = () => {
	return (
		<Container>
			<Typography variant="h4">
				Магазин електроніки Mobile Galaxy – максимум можливостей.
			</Typography>
			<Typography fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif" color="gray">
				Mobile Galaxy – це найсучасніший магазин електроніки та аксесуарів в Україні. Сучасний
				формат, миттєве обслуговування клієнтів дозволили компанії швидко завоювати довіру на ринку
				гаджетів та електронних девайсів. Сьогодні в Україні понад 60 магазинів мережі, в яких
				представлені топові моделі смартфонів.
			</Typography>
			<Typography fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif" color="gray">
				Ми працюємо в двох напрямках – інтернет-магазин розумних гаджетів та мережа
				оффлайн-магазинів. Це можливість побачити товар, вивчити характеристики потрібного гаджета.
				Або заощадити час: купити в інтернеті.
			</Typography>
			<Typography fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif" color="gray">
				Для кожного клієнта створена зручна можливість покупки на сайті, яка дозволяє забрати
				техніку в обраному магазині або отримати замовлення з курьером.
			</Typography>
			<Typography variant="h4">Асортимент інтернет-магазину Mobile Galaxy.</Typography>
			<Typography fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif" color="gray">
				Cмартфони, мобільні телефони – від простих пристроїв до нових прогресивних моделей;
			</Typography>
			<Typography variant="h4">Повний перелік послуг магазину гаджетів Mobile Galaxy.</Typography>
			<List sx={{ color: "gray", listStyle: "initial" }}>
				<ListItem fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif">
					Широка мережа торгових точок. Реалізовано відкритий доступ до товарів, інтерактивні зони
					віртуальної реальності, зони smart-пристроїв, електротранспорту – це дає можливість
					детально вивчити товар;
				</ListItem>
				<ListItem fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif">
					зручний сайт. Інтуїтивно зрозумілий пошук, інформативні фото, докладні описи,
					характеристики – максимально приємний інтернет-шопінг!
				</ListItem>
				<ListItem fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif">
					доставка. Доставляємо товари по всій території України – Миколаїв, Харків, Полтава,
					Херсон, Чернівці, інші міста. Передбачена безкоштовна доставка курєром в Київ та Одесу.
					Мережа оффлайн-магазинів постійно зростає, що дозволяє забрати товар з найближчої до
					вашого будинку точки;
				</ListItem>
				<ListItem fontWeight="fontWeightRegular" fontFamily="Open Sans, sans-serif">
					оригінальні товари з гарантією. Гаджети перевірених виробників, які підтверджують заявлену
					якість своїх девайсів, завоювали довіру користувачів.
				</ListItem>
			</List>

			<ul>
				<li>
					оригінальні товари з гарантією. Гаджети перевірених виробників, які підтверджують заявлену
					якість своїх девайсів, завоювали довіру користувачів.
				</li>
			</ul>
		</Container>
	);
};

export default About;
