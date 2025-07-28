/**
 * Script per aiutare a convertire i colori arancioni hard-coded al nuovo sistema di colori aziendali
 * 
 * Istruzioni per l'uso:
 * 
 * 1. Importare il componente e usare il hook useCompanyColors all'inizio del componente.
 * 
 * // Importa il hook per i colori aziendali
 * import useCompanyColors from 'src/hooks/use-company-colors';
 * 
 * // Nell'area delle variabili del componente
 * const companyColors = useCompanyColors();
 * 
 * 2. Sostituire le stringhe di colore nel seguente modo:
 * 
 * - Per proprietà dirette:
 *   color: 'company.main' -> color: 'company.main'
 * 
 * - Per background colors:
 *   bgcolor: 'company.main' -> bgcolor: 'company.main'
 * 
 * - Per alpha/transparenza:
 *   'company.dark' -> (theme) => alpha(theme.palette.company.main, 0.8)
 *   oppure
 *   'company.dark' -> alpha(companyColors.main, 0.8)
 *   
 * - Per card o box con sfondo:
 *   bgcolor: 'company.lighter' -> bgcolor: 'company.lighter'
 *   oppure
 *   bgcolor: 'company.lighter' -> bgcolor: companyColors.getBgColor(0.08)
 * 
 * - Per hover states in bottoni:
 *   '&:hover': { bgcolor: 'company.dark' } -> '&:hover': { bgcolor: 'company.dark' }
 * 
 * - Per colori di bordi:
 *   borderColor: 'rgb(246,142,59)' -> borderColor: 'company.main'
 *   borderColor: 'company.dark' -> borderColor: (theme) => alpha(theme.palette.company.main, 0.8)
 * 
 * Ricorda di usare gli strumenti appropriati:
 * - Se l'elemento usa alpha() direttamente, usa theme.palette o companyColors.main con alpha
 * - Se l'elemento non usa alpha ma ha bisogno di opacità, usa le varianti predefinite (lighter, light, ecc.)
 */
