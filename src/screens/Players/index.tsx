import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { FlatList } from "react-native";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
    group: string;
}

export function Players() {

    const route = useRoute();
    const { group } = route.params as RouteParams;

    const [team, setTeam] = useState('');
    const [players, setPlayers] = useState([])

    return(

        <Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input 
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon 
                    icon="add"
                />

            </Form>
            <HeaderList>
                <FlatList 
                    data={['TIME A', 'TIME B']}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                    <Filter
                        title={item}
                        isActive={item === team}
                        onPress={() => setTeam(item)}
                    />
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>
            
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) =>(
                    <PlayerCard
                        onRemove={() => {}}
                        name={item}
                    />
                )}
                ListEmptyComponent={() => (
                   <ListEmpty
                        message="Não há pessoas nesse time."
                   />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex: 1}
                ]}
            />
            {players.length > 0 ? 
                <Button 
                    title="Remover turma"
                    type="SECONDARY"
                /> : <></>
            }
        </Container>


    );
}