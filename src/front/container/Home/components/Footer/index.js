
import React from 'react';
import styles from './style.module.scss'

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<a href="/admin.html" className={styles.link}>Enter Admin Page</a>
				</li>
			</ul>
		</div>
	)
}
