import { Filter } from "../filter/Filter";
import { Header } from "../header/Header";
import styles from '../../styles/components/main.module.css'
import { BoxSemiLarge } from "../boxSemiLarge/BoxSemiLarge";
import { BoxSmall } from "../boxSmall/BoxSmall";
import { BoxMedium } from "../boxMedium/BoxMedium";
import { BoxLarge } from "../boxLarge/BoxLarge";

export function Main() {
    return(
        <div className={styles.mainContainer}>
            <div>
                <Header />
            </div>
            <Filter />
            <div className={styles.boxSemiLarge}>
                <BoxSemiLarge h1="R$ 312.321,00" h3="Receita total" h2="R$ 67,20" p="Média por cliente" cor="#EC7A7A" nomeImagem="money-orange"/>
                <BoxSemiLarge h1="R$ 74.421,00" h3="Lucro total" h2="R$ 42,30" p="Média por cliente" cor="#7A85EC" nomeImagem="money-purple"/>
                <BoxSemiLarge h1="R$ 3,12" h3="Lucro por venda" h2="R$ 12,40" p="Média por cliente" cor="#65D4AC" nomeImagem="money-green"/>
            </div>

            <div className={styles.boxSmall}>
                <BoxSmall h2="Clientes ativos" h1="3.312" h3="" p="+2,6% (+12)" cor="#05CD99" />
                <BoxSmall h2="Novos clientes" h1="12" h3="" p="+15,3% (+2)" cor="#05CD99" />
                <BoxSmall h2="Clientes adicionados" h3="" h1="42" p="+42,6% (+8)" cor="#05CD99" />
                <BoxSmall h2="LTV" h1="R$ 142,32" h3="" p="-22,6% (+R$ 12,20)" cor="#CD0505" />
                <BoxSmall h2="Turnover" h1="24,3%" h3="32" p="+42,6% (+3)" cor="#05CD99" />
                <BoxSmall h2="Turnover recuperado" h3="12" h1="54,42%" p="+32,6% (+6)" cor="#05CD99" />
            </div>

            <div className={styles.boxMedium}>
                <BoxMedium h1="312.321" h3="" p="Cotações realizadas" h2="+15,3% (+223)" />
                <BoxMedium h1="212.012" h3="" p="Vendas finalizadas" h2="+15,3% (+223)" />
                <BoxMedium h1="42.021" h3="" p="Cotações não concluídas" h2="+15,3% (+223)" />
                <BoxMedium h1="3.122" h3="3%" p="Cotações não respondidas" h2="+15,3% (+223)" />   
            </div>

            <div className={styles.boxLarge}>
                    <BoxLarge h1="Planos" p="123 planos ativos" column1="CLUBE" column2="CLIENTES" column3="PREÇO"
                    c1r1="Estagiários" c1r2="312 clientes" c1r3="R$ 123,90"
                    c2r1="Diretoria" c2r2="312 clientes" c2r3="R$ 123,90"
                    c3r1="Geral" c3r2="312 clientes" c3r3="R$ 123,90"
                    c4r1="Almoxarifado" c4r2="312 clientes" c4r3="R$ 123,90"
                    />
            
                <BoxLarge h1="Categorias" p="4 categorias em uso" column1="CLUBE" column2="CLIENTES" column3="PREÇO MÉDIO"
                    c1r1="6 vendas" c1r2="312 clientes" c1r3="R$ 123,90"
                    c2r1="12 vendas" c2r2="312 clientes" c2r3="R$ 123,90"
                    c3r1="24 vendas" c3r2="312 clientes" c3r3="R$ 123,90"
                    c4r1="Personalizado" c4r2="312 clientes" c4r3="R$ 123,90"
                    />

                <BoxLarge h1="Tipos de planos" p="2 tipos em uso" column1="CLUBE" column2="CLIENTES" column3="PREÇO MÉDIO"
                    c1r1="Construtoras" c1r2="312 clientes" c1r3="R$ 123,90"
                    c2r1="" c2r2="312 clientes" c2r3="R$ 123,90"
                    c3r1="" c3r2="" c3r3=""
                    c4r1="" c4r2="" c4r3=""
                />

            </div>
            

            
        </div>
    );
}