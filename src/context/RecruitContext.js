import React from 'react'

const RecruitContext = React.createContext({
    resetForm: () => {},
    user: {},
    agents: [],
    activeAgent: {},
    agentNotes: [],
    activeNote: {},
    agentSearch: () => {},
    getAgent: () => {},
    getUser: () => {},
    getNotes: () => {},
    getAgentNotes: () => {},
    getNote: () => {},
    getFollowedAgents: () => {},
    addUser: () => {},
    addNote: () => {},
    addFollowedAgent: () => {},
    updateUser: () => {},
    updateNote: () => {},
    deleteUser: () => {},
    deleteNote: () => {},
    deleteFollowedAgent: () => {},
})

export default RecruitContext;