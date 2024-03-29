import { MatchReader } from "./MatchReader"
// import { CsvFileReader } from './CsvFileReader'
// import { WinsAnalysis } from "./analyzers/WinsAnalysis"
// import { ConsoleReport } from "./reportTargets/ConsoleReport"
import { Summary } from "./Summary"
// import { HtmlReport } from "./reportTargets/HtmlReport"

// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
const summary = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)
