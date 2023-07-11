import SectionLanguages from '../components/Section/SectionLanguage'
import SectionSkills from '../components/Section/SectionSkill'

export default function Section({ section }) {
    const {title, sectionType} = section
    return (
        <>
        <div id="section">{title}</div>
        {sectionType == "languages"?
        <SectionLanguages />:
        <SectionSkills />}
        </>
    )
}
